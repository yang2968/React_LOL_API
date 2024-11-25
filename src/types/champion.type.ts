// types/lol-champion.ts

// 챔피언 기본 정보 인터페이스
interface ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

// 챔피언 이미지 정보 인터페이스
interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

// 챔피언 스탯 인터페이스
interface ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

// 챔피언 전체 데이터 인터페이스
interface ChampionData {
  version: string;
  id: string;
  key: string;
  name: string; // 챔피언 이름
  title: string; // 챔피언 별명
  blurb: string; // 챔피언 설명
  info: ChampionInfo;
  image: ChampionImage;
  tags: string[]; // 챔피언 분류 태그
  partype: string;
  stats: ChampionStats;
}

// 전체 챔피언 데이터 인터페이스
type ChampionType = {
  type: string;
  format: string;
  version: string;
  data: { [key: string]: ChampionData };
};

export { ChampionType, ChampionData };
