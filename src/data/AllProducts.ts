import { ShirtData } from "./ShirtData";
import { TshirtData } from "./TshirtData";
import { TrouserData } from "./TrouserData";
import { ShoeData } from "./ShoeData";
import { JeanData } from "./JeanData";
import { BlazerData } from "./BlazerData";
import { WinterData } from "./WinterData";

export const AllProducts = [
  ...ShirtData,
  ...TshirtData,
  ...TrouserData,
  ...ShoeData,
  ...JeanData,
  ...BlazerData,
  ...WinterData,
];
