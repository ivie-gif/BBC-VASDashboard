import { ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SaleItem } from 'data/sales-data';

const SaleCard = ({ saleItem }: { saleItem: SaleItem }): ReactElement => {
  const Icon = saleItem.icon;

  return (
    <Stack gap={6} p={5} borderRadius={4} height={1} 
    bgcolor={(theme) => (theme.palette.mode === 'dark' ? '#191919' : '#D36128')} >
      <Icon
        style={{ width: 26, height: 26 }}
        sx={{
          color: (theme: { palette: { mode: string } }) =>
            theme.palette.mode === 'dark' ? '#fff' : '#F5F5F5',
        }}
      />
      <Box>
        <Typography
          variant="h4"
          color={(theme) => (theme.palette.mode === 'dark' ? '#fff' : '#191919')}
          mb={4}
        >
          {saleItem.title}
        </Typography>
        <Typography variant="body1" color={(theme) => (theme.palette.mode === 'dark' ? '#fff' : '#f3f3f3')} mb={2}>
          {saleItem.subtitle}
        </Typography>
        <Typography variant="body2" color={(theme) => (theme.palette.mode === 'dark' ? '#D36128' : '#191919')} lineHeight={1.25}>
          +{saleItem.increment}% from yesterday
        </Typography>
      </Box>
    </Stack>
  );
};

export default SaleCard;
