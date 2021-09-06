import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#aa8929",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  bgimg: "url('images/wraithbgwhite.jpg')",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffa16b",
  background: "#2F0006",
  bgimg: "url('images/wraithbg.jpg')",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#231112",
  input: "#703434",
  primaryDark: "#0075a0",
  tertiary: "#443333",
  text: "#f9e0e0",
  textDisabled: "#706060",
  textSubtle: "#d3c4c4",
  borderColor: "#604949",
  card: "#2717179c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5b3131 0%, #512828 100%)",
  },
};
