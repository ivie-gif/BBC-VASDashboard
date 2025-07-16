import { Box, Button, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { ReactElement, useEffect, useRef } from 'react';
import GloMobileTelcoChart from './gloMobileChart';
import { telcoGloMobileData } from 'data/chart-data/gloMobile';

const GloMobile = (): ReactElement => {
  const theme = useTheme();
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
      <Typography
        variant="h6"
        sx={{
          mb: 8,
          color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#001529'),
          fontWeight: 600,
          fontSize: '18px',
        }}
      >
        Glo
      </Typography>
      <GloMobileTelcoChart
        chartRef={chartRef}
        data={telcoGloMobileData}
        sx={{ height: '181px !important', flexGrow: 1 }}
      />
      <Stack
        direction="row"
        justifyContent="space-around"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: alpha(theme.palette.common.white, 0.06), height: 1 }}
          />
        }
        px={2}
        pt={10}
      >
        <Button
          variant="text"
          sx={{
            justifyContent: 'flex-start',
            p: 0.5,
            borderRadius: 1,
            gap: 2.5,
            color: 'text.disabled',
            fontSize: 'body2.fontSize',
            alignItems: 'baseline',
            '&:hover': {
              bgcolor: 'transparent',
            },
            '& .MuiButton-startIcon': {
              mx: 0,
            },
          }}
          disableRipple
        >
          Start Date
        </Button>
        <Button
          variant="text"
          sx={{
            justifyContent: 'flex-start',
            p: 0.5,
            borderRadius: 1,
            gap: 2.5,
            color: 'text.disabled',
            fontSize: 'body2.fontSize',
            alignItems: 'baseline',
            '&:hover': {
              bgcolor: 'transparent',
            },
            '& .MuiButton-startIcon': {
              mx: 0,
            },
          }}
          disableRipple
        >
          End Date
        </Button>
      </Stack>
    </Paper>
  );
};

export default GloMobile;
