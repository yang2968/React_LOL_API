import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import { useVersionStore } from '@/hooks';
import api from '@/apis';
import { AccountInfoType, SummonerInfoType, RankType } from '@/types';
import getRankImage from '@/utils/getRankImage';
import { useTheme } from '@mui/material/styles';

const Summoner = () => {
  const theme = useTheme();
  const version = useVersionStore((state) => state.version);
  const { summoner } = useParams();
  const [player, tagline] = summoner?.split('-') ?? [];

  const [accountInfo, setAccountInfo] = useState<AccountInfoType | null>(null); // 계정 정보
  const [summonerInfo, setSummonerInfo] = useState<SummonerInfoType | null>(null); // 소환사 정보
  const [summonerRankInfo, setSummonerRankInfo] = useState<RankType | null>(null); // 소환사 랭크 정보

  useEffect(() => {
    api
      .getAccountInfo(player, tagline)
      .then((account) => {
        if (account) {
          console.log(account);
          setAccountInfo(account);

          api.getSummonerInfo(account.puuid).then((summoner) => {
            console.log('summoner', summoner);
            const date = new Date(summoner.revisionDate);
            console.log(date.toLocaleString());
            setSummonerInfo(summoner);

            api.getSummonerRankInfo(summoner.id).then((rank) => {
              console.log('rank', rank);
              setSummonerRankInfo(rank);
            });
          });
        }
      })
      .finally(() => {});
  }, []);
  return (
    <Stack sx={{ padding: '10px', backgroundColor: theme.palette.background.default }}>
      <Stack direction='row'>
        <Stack position='relative'>
          <img
            src={`${import.meta.env.VITE_DATA_DRAGON_URL}/cdn/${version}/img/profileicon/${summonerInfo?.profileIconId}.png`}
            alt='profileIcon'
            style={{ width: '100px', height: '100px', borderRadius: '10px' }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '0px',
            }}>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='center'
              sx={{
                width: '100px',
                backgroundColor: '#2c3e50',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '0.8rem',
                color: 'white',
              }}>
              {summonerInfo?.summonerLevel}
            </Stack>
          </Box>
        </Stack>

        <Box sx={{ color: theme.palette.text.primary }}>{`${accountInfo?.gameName}#${accountInfo?.tagLine}`}</Box>
      </Stack>

      <img
        src={summonerRankInfo?.length > 0 ? getRankImage(summonerRankInfo?.[0].tier) : getRankImage('UNRANKED')}
        alt='rankImage'
        style={{ width: '72px', height: '72px' }}
      />
    </Stack>
  );
};

export default Summoner;
