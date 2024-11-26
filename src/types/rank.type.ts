interface RankDataType {
  leagueId: string;
  queueType: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_TFT' | 'RANKED_FLEX_TT'; // 리터럴 타입으로 제한
  tier: 'IRON' | 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'DIAMOND' | 'MASTER' | 'GRANDMASTER' | 'CHALLENGER';
  rank: 'I' | 'II' | 'III' | 'IV';
  summonerId: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

type RankType = RankDataType[];

export { RankType, RankDataType };
