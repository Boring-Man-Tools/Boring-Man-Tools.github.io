
import AcidGun from './assets/weapons/acid_gun.png'
import AssaultRifle from './assets/weapons/assault_rifle.png'
import AutoShotgun from './assets/weapons/auto_shotgun.png'
import Blaster from './assets/weapons/blaster.png'
import BoltAction from './assets/weapons/bolt_action.png'
import Boomerang from './assets/weapons/boomerang.png'
import Bow from './assets/weapons/bow.png'
import BurstPistol from './assets/weapons/burst_pistol.png'
import Buzzer from './assets/weapons/buzzer.png'
import ChainGun from './assets/weapons/chain_gun.png'
import CompactPistols from './assets/weapons/compact_pistols.png'
import CompactUzis from './assets/weapons/compact_uzis.png'
import Crossbow from './assets/weapons/crossbow.png'
import DoubleBarrel from './assets/weapons/double_barrel.png'
import Drone from './assets/weapons/drone.png'
import Dynamite from './assets/weapons/dynamite.png'
import EmpNade from './assets/weapons/emp_nade.png'
import FireUzi from './assets/weapons/fire_uzi.png'
import Flashbang from './assets/weapons/flashbang.png'
import FragNade from './assets/weapons/frag_nade.png'
import FusionCannon from './assets/weapons/fusion_cannon.png'
import GasLauncher from './assets/weapons/gas_launcher.png'
import GasNade from './assets/weapons/gas_nade.png'
import GooGun from './assets/weapons/goo_gun.png'
import Grapplehook from './assets/weapons/grapplehook.png'
import GrenadeLauncher from './assets/weapons/grenade_launcher.png'
import Handcannon from './assets/weapons/handcannon.png'
import Fists from './assets/weapons/fists.png'
import HealNade from './assets/weapons/heal_nade.png'
import HealRifle from './assets/weapons/heal_rifle.png'
import HeavyGrenadeLauncher from './assets/weapons/heavy_grenade_launcher.png'
import Jetpack from './assets/weapons/jetpack.png'
import Keymaster from './assets/weapons/keymaster.png'
import Knife from './assets/weapons/knife.png'
import Kunai from './assets/weapons/kunai.png'
import LeverAction from './assets/weapons/lever_action.png'
import LightAssaultRifle from './assets/weapons/light_assault_rifle.png'
import LightningGun from './assets/weapons/lightning_gun.png'
import LightRocket from './assets/weapons/light_rocket.png'
import LightSmg from './assets/weapons/light_smg.png'
import LongRifle from './assets/weapons/long_rifle.png'
import LongSmg from './assets/weapons/long_smg.png'
import MachineGun from './assets/weapons/machine_gun.png'
import Magic from './assets/weapons/magic.png'
import MolotovNade from './assets/weapons/molotov_nade.png'
import Mortar from './assets/weapons/mortar.png'
import MuleslapperSentry from './assets/weapons/muleslapper_sentry.png'
import Muleslapper from './assets/weapons/muleslapper.png'
import Musket from './assets/weapons/musket.png'
import NitrogenNade from './assets/weapons/nitrogen_nade.png'
import Pineapple from './assets/weapons/pineapple.png'
import Pistol from './assets/weapons/pistol.png'
import PlasmaGun from './assets/weapons/plasma_gun.png'
import Plinger from './assets/weapons/plinger.png'
import PotatoMasher from './assets/weapons/potato_masher.png'
import PowerRifle from './assets/weapons/power_rifle.png'
import PowerSmg from './assets/weapons/power_smg.png'
import PumpAction from './assets/weapons/pump_action.png'
import Railgun from './assets/weapons/railgun.png'
import Revolver from './assets/weapons/revolver.png'
import RiotShield from './assets/weapons/riot_shield.png'
import RocketLauncher from './assets/weapons/rocket_launcher.png'
import SawnOff from './assets/weapons/sawn_off.png'
import ScopedRifle from './assets/weapons/scoped_rifle.png'
import Scuba from './assets/weapons/scuba.png'
import SilencedPistol from './assets/weapons/silenced_pistol.png'
import SingleCompactPistol from './assets/weapons/single_compact_pistol.png'
import SingleCompactUzi from './assets/weapons/single_compact_uzi.png'
import Skateboard from './assets/weapons/skateboard.png'
import Smg from './assets/weapons/smg.png'
import SniperRifle from './assets/weapons/sniper_rifle.png'
import SuicideVest from './assets/weapons/suicide_vest.png'
import Sword from './assets/weapons/sword.png'
import Taser from './assets/weapons/taser.png'
import Tomahawk from './assets/weapons/tomahawk.png'
import TranqRifle from './assets/weapons/tranq_rifle.png'
import TrenchGun from './assets/weapons/trench_gun.png'
import UnderwaterPistol from './assets/weapons/underwater_pistol.png'
import UnderwaterRifle from './assets/weapons/underwater_rifle.png'
import Uzi from './assets/weapons/uzi.png'
import Wrench from './assets/weapons/wrench.png'

type WeaponInfo = {
  id: number
  name: string
  src: string
  dual?: boolean
  single_dual_src?: string
  equipment?: boolean
}

export const WEAPONS: WeaponInfo[] = [
  { id: 0, name: 'Fists', src: Fists },
  { id: 1, name: 'Taser', src: Taser, dual: true },
  { id: 2, name: 'Pistol', src: Pistol, dual: true },
  { id: 3, name: 'Silenced Pistol', src: SilencedPistol, dual: true },
  { id: 4, name: 'Underwater Pistol', src: UnderwaterPistol, dual: true },
  { id: 5, name: 'Revolver', src: Revolver, dual: true },
  { id: 6, name: 'Burst Pistol', src: BurstPistol, dual: true },
  { id: 7, name: 'Compact Pistol', src: CompactPistols, dual: true, single_dual_src: SingleCompactPistol },
  { id: 8, name: 'Handcannon', src: Handcannon, dual: true },
  { id: 9, name: 'Uzi', src: Uzi, dual: true },
  { id: 10, name: 'Compact Uzi', src: CompactUzis, dual: true, single_dual_src: SingleCompactUzi },
  { id: 11, name: 'Fire Uzi', src: FireUzi, dual: true },
  { id: 12, name: 'Light Smg', src: LightSmg },
  { id: 13, name: 'Smg', src: Smg },
  { id: 14, name: 'Power Smg', src: PowerSmg },
  { id: 15, name: 'Long Smg', src: LongSmg },
  { id: 16, name: 'Sawn Off', src: SawnOff, dual: true },
  { id: 17, name: 'Pump Action', src: PumpAction },
  { id: 18, name: 'Double Barrel', src: DoubleBarrel },
  { id: 19, name: 'Trench Gun', src: TrenchGun },
  { id: 20, name: 'Auto Shotgun', src: AutoShotgun },
  { id: 21, name: 'Light Assault Rifle', src: LightAssaultRifle },
  { id: 22, name: 'Assault Rifle', src: AssaultRifle },
  { id: 23, name: 'Keymaster', src: Keymaster },
  { id: 24, name: 'Heal Rifle', src: HealRifle },
  { id: 25, name: 'Underwater Rifle', src: UnderwaterRifle },
  { id: 26, name: 'Musket', src: Musket },
  { id: 27, name: 'Power Rifle', src: PowerRifle },
  { id: 28, name: 'Scoped Rifle', src: ScopedRifle },
  { id: 29, name: 'Long Rifle', src: LongRifle },
  { id: 30, name: 'Lever Action', src: LeverAction },
  { id: 31, name: 'Plinger', src: Plinger },
  { id: 32, name: 'Sniper Rifle', src: SniperRifle },
  { id: 33, name: 'Bolt Action', src: BoltAction },
  { id: 34, name: 'Tranq Rifle', src: TranqRifle },
  { id: 35, name: 'Lightning Gun', src: LightningGun },
  { id: 36, name: 'Machine Gun', src: MachineGun },
  { id: 37, name: 'Chain Gun', src: ChainGun },
  { id: 38, name: 'Grenade Launcher', src: GrenadeLauncher },
  { id: 39, name: 'Heavy Grenade Launcher', src: HeavyGrenadeLauncher },
  { id: 40, name: 'Gas Launcher', src: GasLauncher },
  { id: 41, name: 'Rocket Launcher', src: RocketLauncher },
  { id: 42, name: 'Light Rocket', src: LightRocket },
  { id: 43, name: 'Mortar', src: Mortar },
  { id: 44, name: 'Plasma Gun', src: PlasmaGun },
  { id: 45, name: 'Acid Gun', src: AcidGun },
  { id: 46, name: 'Goo Gun', src: GooGun },
  { id: 47, name: 'Muleslapper', src: Muleslapper },
  { id: 48, name: 'Fusion Cannon', src: FusionCannon },
  { id: 49, name: 'Bow', src: Bow },
  { id: 50, name: 'Crossbow', src: Crossbow },
  { id: 51, name: 'Grapplehook', src: Grapplehook },
  { id: 52, name: 'Knife', src: Knife, dual: true },
  { id: 53, name: 'Sword', src: Sword },
  { id: 54, name: 'Wrench', src: Wrench },
  { id: 56, name: 'Magic', src: Magic },
  { id: 57, name: 'Railgun', src: Railgun },
  { id: 58, name: 'Buzzer', src: Buzzer },
  { id: 59, name: 'Blaster', src: Blaster },
  { id: 60, name: 'Riot Shield', src: RiotShield, equipment: true },
  { id: 61, name: 'Drone', src: Drone, equipment: true },
  { id: 62, name: 'Frag Nade', src: FragNade, equipment: true },
  { id: 63, name: 'Potato Masher', src: PotatoMasher, equipment: true },
  { id: 64, name: 'Emp Nade', src: EmpNade, equipment: true },
  { id: 65, name: 'Molotov Nade', src: MolotovNade, equipment: true },
  { id: 66, name: 'Nitrogen Nade', src: NitrogenNade, equipment: true },
  { id: 67, name: 'Heal Nade', src: HealNade, equipment: true },
  { id: 68, name: 'Gas Nade', src: GasNade, equipment: true },
  { id: 69, name: 'Flashbang', src: Flashbang, equipment: true },
  { id: 70, name: 'Skateboard', src: Skateboard, equipment: true },
  { id: 71, name: 'Tomahawk', src: Tomahawk, equipment: true },
  { id: 72, name: 'Suicide Vest', src: SuicideVest, equipment: true },
  { id: 73, name: 'Muleslapper Sentry', src: MuleslapperSentry, equipment: true },
  { id: 74, name: 'Pineapple', src: Pineapple, equipment: true },
  { id: 75, name: 'Scuba', src: Scuba, equipment: true },
  { id: 76, name: 'Dynamite', src: Dynamite, equipment: true },
  { id: 77, name: 'Kunai', src: Kunai, equipment: true },
  { id: 78, name: 'Jetpack', src: Jetpack, equipment: true },
  { id: 79, name: 'Boomerang', src: Boomerang, equipment: true },
]

export const PRIMARY_WEAPONS = WEAPONS.filter(w => w.equipment !== true)
export const EQUIPMENT_WEAPONS = WEAPONS.filter(w => w.equipment === true)
export const DUAL_WEAPONS = WEAPONS.filter(w => w.dual === true)