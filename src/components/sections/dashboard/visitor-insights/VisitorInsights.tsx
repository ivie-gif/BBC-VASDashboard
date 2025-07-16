import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import VisitorInsightsChart from './VisitorInsightsChart';
import { ReactElement, useEffect, useRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { mockTelcoData } from 'data/chart-data/visitor-insights';

const VisitorInsights = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chartRef]);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={6}
      >
        <Typography
          variant="h6"
          sx={{
            color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#001529'),
            fontWeight: 600,
            fontSize: '18px',
          }}
        >
          Total Months
        </Typography>
        <Button
          variant="text"
          disableRipple
          startIcon={
            <Box
              sx={{
                width: 5,
                height: 5,
                bgcolor: 'warning.main',
                borderRadius: 400,
              }}
            />
          }
          sx={{
            justifyContent: 'flex-start',
            px: 4,
            py: 2,
            borderRadius: 1,
            alignItems: 'center',
            fontSize: 'body2.fontSize',
            gap: 1,
            color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#001427' : '#001427'),
            cursor: 'default',
            '&:hover': {
              bgcolor: 'background.default',
            },
            '& .MuiButton-startIcon': {
              mx: 0,
            },
          }}
        >
          Total Messages
        </Button>
      </Stack>
      <VisitorInsightsChart
        chartRef={chartRef}
        telcoData={mockTelcoData}
        sx={{ height: '342px !important', flexGrow: 1 }}
      />
    </Paper>
  );
};

export default VisitorInsights;
