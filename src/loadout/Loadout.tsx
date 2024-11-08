import {
  ActionIcon,
  Button,
  FileButton,
  Group,
  Image,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import {
  canWeaponIdDualWield,
  EQUIPMENT_WEAPONS,
  PRIMARY_WEAPONS,
} from "../weapons";
import { TbCaretLeftFilled, TbCaretRightFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { getRandomArrayElement } from "../utils";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaDownload, FaUpload } from "react-icons/fa6";
import { LoadoutConfig } from "./types";
import {
  createLoadoutConfigFromFile,
  DEFAULT_LOADOUT_CONFIG,
  downloadLoadoutConfig,
  loadoutCanDualWield,
} from "./utils";

const firstPrimary = PRIMARY_WEAPONS[0];
const firstEquipment = EQUIPMENT_WEAPONS[0];

export const Loadout = () => {
  const [loadout, setLoadout] = useState<LoadoutConfig>({
    ...DEFAULT_LOADOUT_CONFIG,
    primary: firstPrimary.id,
    secondary: firstPrimary.id,
    equipment: firstEquipment.id,
  });

  const setPrimary = (weapon: number) =>
    setLoadout({ ...loadout, primary: weapon });
  const setSecondary = (weapon: number) =>
    setLoadout({ ...loadout, secondary: weapon });
  const setEquipment = (weapon: number) =>
    setLoadout({ ...loadout, equipment: weapon });
  const toggleDualWield = () =>
    setLoadout({ ...loadout, isDualWield: !loadout.isDualWield });

  const onRandomClick = () => {
    const primary = getRandomPrimaryWeapon().id;
    const secondary = getRandomPrimaryWeapon().id;
    const canDualWield = loadoutCanDualWield({
      ...loadout,
      primary,
      secondary,
    });
    const isDualWield = canDualWield && Math.random() > 0.5;

    setLoadout({
      ...loadout,
      primary,
      secondary,
      equipment: getRandomEquipmentWeapon().id,
      isDualWield,
    });
  };

  const onUploadLoadout = async (config: File | null) => {
    const loadoutConfig = await createLoadoutConfigFromFile(config);
    setLoadout({ ...loadoutConfig });
  };

  const onDownloadLoadout = () => {
    downloadLoadoutConfig(loadout);
  };

  // update dualwield if primary or secondary weapons change & not compatible
  useEffect(() => {
    const canDualWield =
      canWeaponIdDualWield(loadout.primary) &&
      canWeaponIdDualWield(loadout.secondary);
    if (!canDualWield) {
      setLoadout((prev) => ({ ...prev, isDualWield: false }));
    }
  }, [loadout.primary, loadout.secondary, setLoadout]);

  return (
    <Stack w="28rem" align="center">
      <ChooseWeapon
        type="primary"
        weapon={loadout.primary}
        setWeapon={setPrimary}
        isDualWield={loadout.isDualWield}
      />
      <ChooseWeapon
        type="secondary"
        weapon={loadout.secondary}
        setWeapon={setSecondary}
        isDualWield={loadout.isDualWield}
      />
      <ChooseWeapon
        type="equipment"
        weapon={loadout.equipment}
        setWeapon={setEquipment}
      />
      <Group justify="space-around" w="100%">
        <FileButton onChange={onUploadLoadout} accept="text/plain">
          {(props) => (
            <Button leftSection={<FaUpload />} variant="light" {...props}>
              Open loadout
            </Button>
          )}
        </FileButton>
        <Button
          leftSection={<FaDownload />}
          variant="light"
          onClick={onDownloadLoadout}
        >
          Save
        </Button>
        <Group ml="auto">
          <DualWieldSwitch
            canDualWield={loadoutCanDualWield(loadout)}
            onChange={toggleDualWield}
            isOn={loadout.isDualWield}
          />
          <ActionIcon
            aria-label="Randomize loadout"
            onClick={onRandomClick}
            variant="subtle"
            size="xl"
          >
            <GiPerspectiveDiceSixFacesRandom size="4rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Stack>
  );
};

type DualWieldSwitchProps = {
  canDualWield: boolean;
  onChange: () => void;
  isOn: boolean;
};
const DualWieldSwitch = ({
  canDualWield,
  onChange,
  isOn,
}: DualWieldSwitchProps) => {
  return (
    <Switch
      size="lg"
      onLabel="Dual wield"
      offLabel="No dual wield"
      style={{
        "--switch-width": "6rem",
      }}
      disabled={!canDualWield}
      onChange={onChange}
      checked={isOn}
    />
  );
};

type ChooseWeaponProps = {
  type: "primary" | "secondary" | "equipment";
  setWeapon: (newWeaponId: number) => void;
  weapon: number;
  isDualWield?: boolean;
};

const ChooseWeapon = ({
  type,
  weapon,
  setWeapon,
  isDualWield = false,
}: ChooseWeaponProps) => {
  const weapons = type === "equipment" ? EQUIPMENT_WEAPONS : PRIMARY_WEAPONS;
  const currentWeaponIndex = weapons.findIndex((value) => value.id === weapon);
  const previousWeaponIndex =
    currentWeaponIndex > 0 ? currentWeaponIndex - 1 : weapons.length - 1;
  const nextWeaponIndex =
    currentWeaponIndex < weapons.length - 1 ? currentWeaponIndex + 1 : 0;
  const currentWeapon = weapons[currentWeaponIndex];
  const previousWeapon = weapons[previousWeaponIndex];
  const nextWeapon = weapons[nextWeaponIndex];

  return (
    <Group w="100%" h="10rem">
      <ActionIcon
        aria-label={`Previous ${type} weapon`}
        variant="light"
        h="100%"
        w="3rem"
        onClick={() => setWeapon(previousWeapon.id)}
      >
        <TbCaretLeftFilled />
      </ActionIcon>
      <Stack mx="auto">
        <Image
          src={
            isDualWield
              ? (currentWeapon.single_dual_src ?? currentWeapon.src)
              : currentWeapon.src
          }
          w="auto"
          fit="contain"
        />
        <Text size="md">{currentWeapon.name}</Text>
      </Stack>
      <ActionIcon
        aria-label={`Next ${type} weapon`}
        variant="light"
        h="100%"
        w="3rem"
        onClick={() => setWeapon(nextWeapon.id)}
      >
        <TbCaretRightFilled />
      </ActionIcon>
    </Group>
  );
};

function getRandomPrimaryWeapon() {
  return getRandomArrayElement([...PRIMARY_WEAPONS]);
}

function getRandomEquipmentWeapon() {
  return getRandomArrayElement([...EQUIPMENT_WEAPONS]);
}
