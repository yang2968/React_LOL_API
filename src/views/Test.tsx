import { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, FormControl, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <div>{'롤 테스트'}</div>
      <div>{'롤 테스트'}</div>
      <div>{'롤 테스트'}</div>
      <Button variant='contained' onClick={() => navigate('/spells')}>
        {'스펠 테스트'}
      </Button>
      <Button variant='contained' onClick={() => navigate('/items')}>
        {'아이템 테스트'}
      </Button>
      <Button variant='contained' onClick={() => navigate('/champions')}>
        {'챔피언 테스트'}
      </Button>
    </Stack>
  );
};

export default Test;
