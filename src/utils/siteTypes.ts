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

const SITE_TYPES = new Map([
  ["Matkarada", { icon: trailIcon }],
  ["Õpperada", { icon: trailIcon }],
  ["Külastuskeskus", { icon: infoIcon }],
  ["Loodusmaja", { icon: infoIcon }],
  ["Lõkkekoht", { icon: fireIcon }],
  ["Telkimisala", { icon: campIcon }],
  ["Puhkekoht", { icon: restIcon }],
  ["Vaatetorn", { icon: towerIcon }],
  ["Metsamaja", { icon: houseWithKeyIcon }],
  ["Metsaonn", { icon: houseIcon }],
  ["Rattarada", { icon: bikeIcon }],
  ["Maastikusõidurada", { icon: basicOrangeIcon }],
  ["Teabepunkt", { icon: infoIcon }],
  ["Muu", { icon: basicOrangeIcon }],
]);

const getIconPathFromSiteType = (type: string): string =>
  SITE_TYPES.get(type)?.icon || basicOrangeIcon;

export { SITE_TYPES, getIconPathFromSiteType };
