export interface ThemeColors {
  /** @format color */
  base: string;
  /** @format color */
  primary: string;
  /** @format color */
  secondary: string;
  /** @format color */
  neutral: string;
  /** @format color */
  danger: string;
  /** @format color */
  success: string;
  /** @format color */
  warning: string;
  /** @format color */
  info: string;
}

export interface ComplementaryColors {
  primaryShades: ColorShades;
  secondaryShades: ColorShades;
  neutralShades: ExtendedColorShades;
  dangerShades: ColorShades;
  successShades: ColorShades;
  warningShades: ColorShades;
  infoShades: ColorShades;
}

export interface ColorShades {
  /** @format color */
  "400"?: string;
  /** @format color */
  "300"?: string;
  /** @format color */
  "200"?: string;
  /** @format color */
  "100"?: string;
}

export interface ExtendedColorShades {
  /** @format color */
  "600"?: string;
  /** @format color */
  "500"?: string;
  /** @format color */
  "400"?: string;
  /** @format color */
  "300"?: string;
  /** @format color */
  "200"?: string;
}
