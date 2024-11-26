// 소환사 정보 타입
interface SummonerInfoType {
  id: string;
  accountId: string;
  puuid: string;
  profileIconId: number; // 프로필 이미지 Id
  revisionDate: number; // 최근 활동 시간
  summonerLevel: number; // 소환사 레벨
}

export { SummonerInfoType };
