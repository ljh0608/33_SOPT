import "styled-components";
import { ColorTypes, FontsTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorTypes;
    fontSize: FontsTypes;
  }
}
