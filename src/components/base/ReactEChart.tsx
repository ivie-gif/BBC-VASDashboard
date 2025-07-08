// import { Box, BoxProps } from '@mui/material';
// import { EChartsReactProps } from 'echarts-for-react';
// import EChartsReactCore from 'echarts-for-react/lib/core';
// import ReactEChartsCore from 'echarts-for-react/lib/core';
// import { forwardRef } from 'react';

// export interface ReactEchartProps extends BoxProps {
//   echarts: EChartsReactProps['echarts'];
//   option: EChartsReactProps['option'];
// }

// const ReactEChart = forwardRef<null | EChartsReactCore, ReactEchartProps>(
//   ({ option, ...rest }, ref) => {
//     return (
//       <Box
//         component={ReactEChartsCore}
//         ref={ref}
//         option={{
//           ...option,
//           tooltip: {
//             ...option.tooltip,
//             confine: true,
//           },
//         }}
//         {...rest}
//       />
//     );
//   },
// );

// export default ReactEChart;



import { Box, BoxProps } from '@mui/material';
import { EChartsReactProps } from 'echarts-for-react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { forwardRef } from 'react';

// ✅ Step 1: Manual imports and registration
import * as echarts from 'echarts/core';
import { LineChart, BarChart, PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  LineChart,
  BarChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
  CanvasRenderer, // ✅ Required renderer
]);

export interface ReactEchartProps extends BoxProps {
  option: EChartsReactProps['option'];
}

const ReactEChart = forwardRef<null | EChartsReactCore, ReactEchartProps>(
  ({ option, ...rest }, ref) => {
    return (
      <Box
        component={ReactEChartsCore}
        ref={ref}
        echarts={echarts} // ✅ Pass fully configured echarts instance
        option={{
          ...option,
          tooltip: {
            ...option.tooltip,
            confine: true,
          },
        }}
        {...rest}
      />
    );
  }
);

export default ReactEChart;
