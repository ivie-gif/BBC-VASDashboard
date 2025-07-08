import React, { ReactElement, useMemo } from 'react';
import { alpha, SxProps, useTheme } from '@mui/material';
import ReactEChart from 'components/base/ReactEChart';
import { BarSeriesOption } from 'echarts';
import * as echarts from 'echarts/core';
import EChartsReactCore from 'echarts-for-react/lib/core';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';

type GloMobileStatisticsData = {
  name: string;
  value: number;
  color: string;
};

// Passing the Data from the Telco with color combo
type GloMobileChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  data: GloMobileStatisticsData[];
  sx?: SxProps;
};

type GloMobileChartOptions = echarts.ComposeOption<
  BarSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const GloMobileTelcoChart = ({ chartRef, data, ...rest }: GloMobileChartProps): ReactElement => {
  const theme = useTheme();

  const option: GloMobileChartOptions = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        show: false,
        data: ['Volume', 'Service'],
      },
      xAxis: {
        type: 'category',
        show: true,
        axisTick: { show: false },
        data: data.map((item) => item.name),
        axisLabel: {
          color: theme.palette.text.primary,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: alpha(theme.palette.common.white, 0.06),
            width: 1,
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: theme.palette.text.primary },
        splitLine: {
          lineStyle: { color: alpha(theme.palette.common.white, 0.06) },
        },
      },
      grid: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 1,
        containLabel: true,
      },
      series: [
        {
          type: 'bar',
          data: data.map((item) => ({
            value: item.value,
            itemStyle: { color: item.color, borderRadius: 4 },
          })),
          barWidth: 30,
        },
      ],
    }),
    [data, theme],
  );
  // );
  return <ReactEChart ref={chartRef} option={option} {...rest} />;
};

export default GloMobileTelcoChart;
