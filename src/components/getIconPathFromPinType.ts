import trailIcon from "../assets/pins/ico_walk_n.png";
import infoIcon from "../assets/pins/ico_info_n.png";
import fireIcon from "../assets/pins/ico_fire_n.png";
import campIcon from "../assets/pins/ico_camp_n.png";
import restIcon from "../assets/pins/ico_rest_n.png";
import towerIcon from "../assets/pins/ico_tower_n.png";
import houseWithKeyIcon from "../assets/pins/ico_housekey_n.png";
import houseIcon from "../assets/pins/ico_house_n.png";
import bikeIcon from "../assets/pins/ico_bike_n.png";
import basicOrangeIcon from "../assets/pins/ico_basic_orange_n.png";

const iconToPinTypeMap = new Map([
  ["Matkarada", trailIcon],
  ["Õpperada", trailIcon],
  ["Külastuskeskus", infoIcon],
  ["Loodusmaja", infoIcon],
  ["Lõkkekoht", fireIcon],
  ["Telkimisala", campIcon],
  ["Puhkekoht", restIcon],
  ["Vaatetorn", towerIcon],
  ["Metsamaja", houseWithKeyIcon],
  ["Metsaonn", houseIcon],
  ["Rattarada", bikeIcon],
  ["Maastikusõidurada", basicOrangeIcon],
  ["Teabepunkt", infoIcon],
  ["Muu", basicOrangeIcon],
]);

const getIconPathFromPinType = (type: string): string =>
  iconToPinTypeMap.get(type) || basicOrangeIcon;

export default getIconPathFromPinType;
