package locationmap;

import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 * Contains main method which extracts every RMK point of interest (site) 
 * from local copy of RMK website loodusegakoos.ee search page (all results).
 * @author arturpata
 *
 */
public class Program {
	
	 
	public static void main(String[] args) throws IOException {
//		Get all result elements from local copy of loodusegakoos.ee search (all results)
		File input = new File("data/loodusegakoos_search.html");
		Document doc = Jsoup.parse(input, "UTF-8","");
		Elements resultRows = doc.getElementsByClass("result-row");		
		
//		Create data file to save results in
		Charset charset = Charset.forName("UTF-8");
		Path output = FileSystems.getDefault().getPath("html", "data.json");
		BufferedWriter writer = Files.newBufferedWriter(output, charset);
		
//		Write data file beginning
		String beginning = "var sites = [";
		try {
			writer.write(beginning, 0, beginning.length());
		} catch (IOException x) {
		    System.err.println("IOException: %s%n" + x.toString());
		}
		
		for (Element result : resultRows) {
//			Acquire as much information from result row as possible
			String link = result.child(0).child(0).attr("href");	
			String imgLink ="http://loodusegakoos.ee/photos/" + result.child(0).child(0).child(0).attr("src").split("/")[2];
			String name = result.child(1).child(0).text();
			String desc = result.child(1).child(1).text();
			String loc1 = result.child(2).child(0).text();
			String loc2 = result.child(2).child(1).text();
			
//			Open connection to page of site
			Document resultDoc = Jsoup.connect(link).get();
			
//			If a site doesn't have coordinates, use Tallinn city coordinates instead
			String latitude = "59.437222";
			String longitude = "24.745278";
			
			try {
				latitude = resultDoc.getElementsContainingText("Koordinaadid").last().nextElementSibling().text().split(" ")[4];
				longitude = resultDoc.getElementsContainingText("Koordinaadid").last().nextElementSibling().text().split(" ")[6];
			} catch (Exception e) {
				System.err.println(e);
			}
			String type = resultDoc.getElementsContainingText("Objekti tüüp").last().nextElementSibling().text();

//			Find driving guide, if it exists
			String guide = "";
			try {
				guide = resultDoc.getElementsContainingText("Kohalesõitmise õpetus").last().nextElementSibling().text();
			} catch (Exception e) {
				System.err.println(e);
			}
			
//			Find associated icon texts
			String markings = "";
			for (Element elem : result.child(3).getElementsByClass("ico-tooltip-inner")) {
				if  (markings.length() != 0) {
					markings += ", ";
				}
				markings += elem.text().toLowerCase();
			}
			
//			Create json object as text string
			String jsonText = "{'name': '" + name + "', 'link': '" + link +
					"', 'type': '" + type + "', 'latitude': " + latitude +
					", 'longitude': " + longitude + ", 'markings': '" + markings + 
					"', 'img_link': '" + imgLink + "', 'desc': '" + desc + 
					"', 'loc1': '" + loc1 + "', 'loc2': '" + loc2 + 
					"', 'guide': '" + guide + "'}\n,\n";
			
//			Write object data to file
			try {
				writer.write(jsonText);
			} catch (IOException e) {
				System.err.println("IOException: %s%n" + e.toString());
			}
			
			System.out.print(jsonText);
			
//			Wait before opening next page
			try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				System.err.println("InterruptedException: %s%n" + e.toString());
			}
		}

//		Write list ending, close writer.
		String end = "]";	
		try {
			writer.write(end, 0, end.length());
		} catch (IOException e) {
		    System.err.println("IOException: %s%n" + e.toString());
		}
		writer.close();
		
	}

}
