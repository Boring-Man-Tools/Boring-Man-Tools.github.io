export type RawLoadoutConfig = {
  name: string;
  primary: number;
  secondary: number;
  equipment: number;
  isDualWield: number;
  filepath: string;
};

export type LoadoutConfig = Omit<RawLoadoutConfig, "isDualWield"> & {
  isDualWield: boolean;
  isFromWindows: boolean;
};
