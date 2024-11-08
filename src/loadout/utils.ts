import { LoadoutConfig, RawLoadoutConfig } from "./types";

export const DEFAULT_LOADOUT_CONFIG: LoadoutConfig = {
  name: "default",
  filepath: "loadouts\\42.loadout",
  primary: 0,
  secondary: 0,
  equipment: 0,
  isDualWield: false,
  isFromWindows: true,
};

export async function createLoadoutConfigFromFile(
  file: File | null,
): Promise<LoadoutConfig> {
  if (file === null) {
    return DEFAULT_LOADOUT_CONFIG;
  }

  const content = await file.text();
  // check for windows or linux
  const isWindowsFile = content.includes("\r\n");
  const lines = isWindowsFile ? content.split("\r\n") : content.split("\n");

  const rawConfig: RawLoadoutConfig = {
    name: lines[0],
    primary: Number(lines[1]),
    secondary: Number(lines[2]),
    equipment: Number(lines[3]),
    isDualWield: Number(lines[4]),
    filepath: lines[5],
  };

  return {
    ...rawConfig,
    isDualWield: rawConfig.isDualWield === 1,
    isFromWindows: isWindowsFile,
  };
}
