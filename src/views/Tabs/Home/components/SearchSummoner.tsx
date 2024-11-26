import { useEffect, useState } from 'react';
import { Stack, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import api from '@/apis';

const SearchSummoner = () => {
  const navigate = useNavigate();

  const [player, setPlayer] = useState<string>('');
  const [tagline, setTagline] = useState<string>('');

  const handleSearch = (player: string, tagline: string) => {
    if (player.length === 0 && tagline.length === 0) {
      alert('플레이어와 태그라인을 입력해주세요.');
      return;
    }
    if (player.length === 0) {
      alert('플레이어를 입력해주세요.');
      return;
    }
    if (tagline.length === 0) {
      alert('태그라인을 입력해주세요.');
      return;
    }
    if (player.length > 0 && tagline.length > 0) {
      console.log('player', player);
      console.log('tagline', tagline);
      const encodedPlayer = encodeURIComponent(player);
      const encodedTagline = encodeURIComponent(tagline);
      navigate(`/summoner/${encodedPlayer}-${encodedTagline}`);
    }
  };

  return (
    <Stack gap={1}>
      <StyledTextField label='플레이어' size='small' value={player} onChange={(e) => setPlayer(e.target.value)} />
      <StyledTextField label='태그라인' size='small' value={tagline} onChange={(e) => setTagline(e.target.value)} />
      <Button sx={{ width: '200px' }} variant='contained' onClick={() => handleSearch(player, tagline)}>
        {'소환사 찾기'}
      </Button>
    </Stack>
  );
};

export default SearchSummoner;

const StyledTextField = styled(TextField)({
  width: '200px',
});
