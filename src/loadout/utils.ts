import { downloadFile } from "../utils";
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

const WINDOWS_RETURN_LINE = "\r\n";
const RETURN_LINE = "\n";

export async function createLoadoutConfigFromFile(
  file: File | null,
): Promise<LoadoutConfig> {
  if (file === null) {
    return DEFAULT_LOADOUT_CONFIG;
  }

  const content = await file.text();
  // check for windows or linux
  const isWindowsFile = content.includes(WINDOWS_RETURN_LINE);
  const lines = isWindowsFile
    ? content.split(WINDOWS_RETURN_LINE)
    : content.split(RETURN_LINE);

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

export function downloadLoadoutConfig(config: LoadoutConfig) {
  const returnLine = config.isFromWindows ? WINDOWS_RETURN_LINE : RETURN_LINE;
  const filename = config.filepath.split("loadouts\\")[1];

  const content =
    `${config.name}${returnLine}` +
    `${config.primary}${returnLine}` +
    `${config.secondary}${returnLine}` +
    `${config.equipment}${returnLine}` +
    `${config.isDualWield ? 1 : 0}${returnLine}` +
    `${config.filepath}`;

  downloadFile(filename, content);
}
