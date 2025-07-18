import { ReactElement } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import salesData from 'data/sales-data';
import SaleCard from './SaleCard';

const TodaysSales = (): ReactElement => {
  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography
        variant="h4"
        color={(theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000')}
        mb={1.25}
        sx={{ fontSize: '20px', fontWeight: 600 }}
      >
        Dashboard
      </Typography>
      <Typography
        variant="subtitle2"
        color={(theme) => (theme.palette.mode === 'dark' ? '#D36128' : '#D36128')}
        mb={6}
        sx={{ fontSize: '16px', fontWeight: 600 }}
      >
        SMS Summary
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={{ xs: 4, sm: 6 }}>
        {salesData.map((saleItem) => (
          <Box key={saleItem.id} gridColumn={{ xs: 'span 12', sm: 'span 6', lg: 'span 3' }}>
            <SaleCard saleItem={saleItem} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default TodaysSales;
