import { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, FormControl, Stack } from '@mui/material';
import { useVersionStore, useItemStore } from '@/hooks';
import { ItemData } from '@/types/item.type';
import { useTheme } from '@mui/material/styles';

const Item = () => {
  const theme = useTheme();
  const version = useVersionStore((state) => state.version);
  const itemData = useItemStore((state) => state.item);

  const [items, setItems] = useState<{ [key: number]: ItemData }>(null);

  useEffect(() => {
    if (itemData) {
      console.log('itemData', itemData);

      setItems(itemData.data);
    }
  }, [itemData]);

  return (
    <Stack sx={{ color: theme.palette.text.primary }}>
      {items ? (
        Object.keys(items).map((item) => {
          return (
            <Stack key={item}>
              <img
                style={{ width: '50px', height: '50px' }}
                src={`${import.meta.env.VITE_DATA_DRAGON_URL}/cdn/${version}/img/item/${items[item].image.full}`}
                alt={items[item].name}
              />
              <Box>{items[item].name}</Box>
              <Box>{items[item].gold.total}</Box>
              <Box>{parseHTML(items[item].description)}</Box>
              <Box>{items[item].plaintext}</Box>
            </Stack>
          );
        })
      ) : (
        <Box>로딩중</Box>
      )}
    </Stack>
  );
};

export default Item;

const parseHTML = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent;
};

const getItemType = (type: string) => {
  switch (type) {
    case 'DAMAGE':
    case 'CRITICALSTRIKE':
    case 'ATTACKSPEED':
    case 'LIFESTEAL':
    case 'ARMORPENETRATION':
  }
};
