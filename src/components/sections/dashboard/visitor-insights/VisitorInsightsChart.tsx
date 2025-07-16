import { SxProps, useTheme, alpha } from '@mui/material';
import ReactEChart from 'components/base/ReactEChart';
import * as echarts from 'echarts/core';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { LineSeriesOption } from 'echarts/charts';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { ReactElement, useMemo } from 'react';
import { VisitorInsightsProps } from 'data/chart-data/visitor-insights';

type TelcoMonthlyData = {
  [month: string]: number;
};

type TotalTelcoChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  telcoData: VisitorInsightsProps;
  sx?: SxProps;
};

type TotalTelcoChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const TotalTelcoChart = ({ chartRef, telcoData, ...rest }: TotalTelcoChartProps): ReactElement => {
  const theme = useTheme();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const mockStatusData = {
    ACK: [190, 220, 240, 370, 860, 930, 1110, 2330, 33340, 22340, 12340, 67890],
    DELIVRD: [800, 1000, 750, 900, 880, 1000, 960, 1020, 950, 930, 900, 861],
    EXPIRED: [12000, 13500, 11800, 12900, 12300, 12800, 12100, 12500, 12200, 12700, 13000, 12854],
    UNDELIV: [900, 1100, 1050, 1020, 980, 1100, 1060, 1110, 1090, 1080, 1030, 1042],
    NACK: [110, 30, 790, 2260, 789, 200990, 90220, 20090, 23340, 2090, 560, 890, 560],
  };

  const statusColors: Record<string, string> = {
    ACK: '#4caf50',
    DELIVRD: '#2196f3',
    EXPIRED: '#ff9800',
    UNDELIV: '#f44336',
    NACK: '#9c27b0',
  };

  const series: LineSeriesOption[] = Object.entries(mockStatusData).map(([status, values]) => ({
    name: status,
    type: 'line',
    data: values,
    lineStyle: { color: statusColors[status], width: 2 },
    areaStyle: { color: alpha(statusColors[status], 0.15) },
    showSymbol: false,
    emphasis: { focus: 'series' },
  }));

  const option: TotalTelcoChartOptions = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: theme.palette.warning.main,
          },
          label: {
            backgroundColor: theme.palette.warning.main,
          },
        },
      },
      legend: {
        show: true,
        top: 'top',
        data: Object.keys(mockStatusData),
        textStyle: {
          color: theme.palette.text.primary,
        },
      },
      grid: {
        top: '15%',
        right: '1%',
        bottom: '2.5%',
        left: '1.25%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: months,
        axisLabel: { color: theme.palette.text.primary },
        axisLine: {
          show: true,
          lineStyle: {
            color: alpha(theme.palette.common.white, 0.06),
            width: 1,
          },
        },
        axisTick: { show: false },
      },
      yAxis: {
        type: 'value',
        min: 0,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          padding: [0, 10, 0, 0],
          fontSize: theme.typography.body2.fontSize,
          fontWeight: theme.typography.fontWeightMedium as number,
          color: theme.palette.text.primary,
        },
      },
      series,
    }),
    [telcoData, theme],
  );

  return <ReactEChart ref={chartRef} option={option} {...rest} />;
};

export default TotalTelcoChart;
