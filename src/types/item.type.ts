// types/lol-item.ts

// 기본 아이템 정보 인터페이스
interface BasicItem {
  name: string;
  rune: {
    isrune: boolean;
    tier: number;
    type: string;
  };
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stacks: number;
  depth: number;
  consumeOnFull: boolean;
  from: string[];
  into: string[];
  specialRecipe: number;
  inStore: boolean;
  hideFromAll: boolean;
  requiredChampion: string;
  requiredAlly: string;
  stats: ItemStats;
  tags: string[];
  maps: { [key: string]: boolean };
}

// 아이템 스탯 인터페이스
interface ItemStats {
  FlatHPPoolMod: number;
  rFlatHPModPerLevel: number;
  FlatMPPoolMod: number;
  rFlatMPModPerLevel: number;
  PercentHPPoolMod: number;
  PercentMPPoolMod: number;
  FlatHPRegenMod: number;
  rFlatHPRegenModPerLevel: number;
  PercentHPRegenMod: number;
  FlatMPRegenMod: number;
  rFlatMPRegenModPerLevel: number;
  PercentMPRegenMod: number;
  FlatArmorMod: number;
  rFlatArmorModPerLevel: number;
  PercentArmorMod: number;
  rFlatArmorPenetrationMod: number;
  rFlatArmorPenetrationModPerLevel: number;
  rPercentArmorPenetrationMod: number;
  rPercentArmorPenetrationModPerLevel: number;
  FlatPhysicalDamageMod: number;
  rFlatPhysicalDamageModPerLevel: number;
  PercentPhysicalDamageMod: number;
  FlatMagicDamageMod: number;
  rFlatMagicDamageModPerLevel: number;
  PercentMagicDamageMod: number;
  FlatMovementSpeedMod: number;
  rFlatMovementSpeedModPerLevel: number;
  PercentMovementSpeedMod: number;
  rPercentMovementSpeedModPerLevel: number;
  FlatAttackSpeedMod: number;
  PercentAttackSpeedMod: number;
  rPercentAttackSpeedModPerLevel: number;
  rFlatDodgeMod: number;
  rFlatDodgeModPerLevel: number;
  PercentDodgeMod: number;
  FlatCritChanceMod: number;
  rFlatCritChanceModPerLevel: number;
  PercentCritChanceMod: number;
  FlatCritDamageMod: number;
  rFlatCritDamageModPerLevel: number;
  PercentCritDamageMod: number;
  FlatBlockMod: number;
  PercentBlockMod: number;
  FlatSpellBlockMod: number;
  rFlatSpellBlockModPerLevel: number;
  PercentSpellBlockMod: number;
  FlatEXPBonus: number;
  PercentEXPBonus: number;
  rPercentCooldownMod: number;
  rPercentCooldownModPerLevel: number;
  rFlatTimeDeadMod: number;
  rFlatTimeDeadModPerLevel: number;
  rPercentTimeDeadMod: number;
  rPercentTimeDeadModPerLevel: number;
  rFlatGoldPer10Mod: number;
  rFlatMagicPenetrationMod: number;
  rFlatMagicPenetrationModPerLevel: number;
  rPercentMagicPenetrationMod: number;
  rPercentMagicPenetrationModPerLevel: number;
  FlatEnergyRegenMod: number;
  rFlatEnergyRegenModPerLevel: number;
  FlatEnergyPoolMod: number;
  rFlatEnergyModPerLevel: number;
  PercentLifeStealMod: number;
  PercentSpellVampMod: number;
}

// 아이템 데이터 인터페이스
interface ItemData {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into?: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: { [key: string]: boolean };
  stats: Partial<ItemStats>;
  depth?: number;
  from?: string[];
  effect?: { [key: string]: string };
  inStore?: boolean;
  specialRecipe?: number;
}

// 그룹 인터페이스
interface ItemGroup {
  id: string;
  MaxGroupOwnable: string;
}

// 트리 인터페이스
interface ItemTree {
  header: string;
  tags: string[];
}

// 전체 아이템 데이터 인터페이스
type ItemType = {
  type: string;
  version: string;
  basic: BasicItem;
  data: { [key: number]: ItemData };
  groups: ItemGroup[];
  tree: ItemTree[];
};

export { ItemType, ItemData };
