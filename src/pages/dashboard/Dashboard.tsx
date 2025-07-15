// import { ReactElement } from 'react';
// import { Box } from '@mui/material';

// import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
// import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
// import CustomDateTimeRangePicker from '../../reusables/dateTimeRange';
// import Level from 'components/sections/dashboard/level/Level';

// // import NineMobileChart from 'components/sections/dashboard/nineMobileChart/nineMobile';

// const Dashboard = (): ReactElement => {
//   return (
//     <>
//       <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
//         {/* Dashboard cards */}
//         <Box display="block" gridColumn={{ xs: 'span 12', '2xl': 'span 12' }} order={{ xs: 0 }}>
//           <TodaysSales />
//         </Box>
//         {/* Date range pickers */}
//         <Box
//           display="flex"
//           gap={5}
//           gridColumn={{ xs: 'span 12', '2xl': 'span 12' }}
//           sx={{ width: '50%', mt: 15 }}
//         >
//           <CustomDateTimeRangePicker />
//           <CustomDateTimeRangePicker />
//         </Box>
//         {/* Level chart and Visitor Insights / Glo and Airtel */}
//         <Box gridColumn={{ xs: 'span 12', lg: 'span 6' }} order={{ xs: 1, '2xl': 1 }}>
//           <Level />
//         </Box>
//         <Box gridColumn={{ xs: 'span 12', lg: 'span 6' }} order={{ xs: 2, '2xl': 2 }}>
//           {/* <VisitorInsights /> */}
//           <Level />
//         </Box>
//         {/* Customer Fulfillment  and Visitor Insights / 9Mobile and MTN */}
//         <Box gridColumn={{ xs: 'span 12', lg: 'span 6' }} order={{ xs: 3, xl: 3, '2xl': 3 }}>
//         <Level />
//         </Box>
//         <Box gridColumn={{ xs: 'span 12', lg: 'span 6' }} order={{ xs: 4, xl: 4, '2xl': 4 }}>
//           {/* <VisitorInsights /> */}
//           <Level />
//         </Box>  

//         {/* Earnings / Total of all Telco Data  */}
//         <Box
//           display="block"
//           sx={{ mt: 15 }}
//           gridColumn={{ xs: 'span 12', md: 'span 12', xl: 'span 12' }}
//           order={{ xs: 5, xl: 5, '2xl': 5 }}
//         >
//           <VisitorInsights />
//         </Box>

//         {/* Not Needed at the moment */}
//         {/* <Box
//           gridColumn={{ xs: 'span 12', xl: 'span 8', '2xl': 'span 6' }}
//           order={{ xs: 6, '2xl': 6 }}
//         >
//           <TrendingNow />
//         </Box>
//         <Box gridColumn={{ xs: 'span 12', '2xl': 'span 6' }} order={{ xs: 7 }}>
//           <Customers />
//         </Box> */}
//       </Box>
//     </>
//   );
// };

// export default Dashboard;




import { ReactElement } from 'react';
import { Box } from '@mui/material';

import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
// import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
// import TrendingNow from 'components/sections/dashboard/trending-now/TrendingNow';
// import Customers from 'components/sections/dashboard/customers/Customers';
import Earnings from 'components/sections/dashboard/earnings/Earnings';
// import Level from 'components/sections/dashboard/level/Level';
import NineMobileChart from 'components/sections/dashboard/nineMobileChart/nineMobile';
import GloMobileChart from 'components/sections/dashboard/gloMobileChart/gloMobile';
import CustomDateTimeRangePicker from '../../reusables/dateTimeRange';
import AirtelMobileChart from 'components/sections/dashboard/airtelMobileChart/airtelMobile';
import MtnMobileChart from 'components/sections/dashboard/mtnMobileChart/mtnMobile';

const Dashboard = (): ReactElement => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
        <Box gridColumn={{ xs: 'span 12', '2xl': 'span 12' }} order={{ xs: 0 }}>
          <TodaysSales />
        </Box>
        {/* Date range pickers */}
         <Box
          display="flex"
          gap={5}
          gridColumn={{ xs: 'span 12', '2xl': 'span 12' }}
          sx={{ width: '50%', mt: 15, }}

        >
          <CustomDateTimeRangePicker />
          <CustomDateTimeRangePicker />
        </Box>

        {/* 9mobile and glo charts */}
        <Box gridColumn={{ xs: 'span 12', lg: 'span 6' }} order={{ xs: 1, '2xl': 1 }}>
          <NineMobileChart />
        </Box>
        <Box gridColumn={{ xs: 'span 12', lg: 'span 6' }} order={{ xs: 2, '2xl': 2 }}>
          <GloMobileChart />
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 6' }}
          order={{ xs: 3, xl: 3, '2xl': 3 }}
        >
          <AirtelMobileChart />
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 6' }}
          order={{ xs: 4, xl: 4, '2xl': 4 }}
        >
          <MtnMobileChart />
        </Box>
        <Box sx={{mt: 15}} gridColumn={{ xs: 'span 12', xl: 'span 12' }} order={{ xs: 5, xl: 5, '2xl': 5 }}>
          <VisitorInsights />
        </Box>
        {/* <Box
          gridColumn={{ xs: 'span 12', xl: 'span 8', '2xl': 'span 6' }}
          order={{ xs: 6, '2xl': 6 }}
        >
          <TrendingNow />
        </Box>
        <Box gridColumn={{ xs: 'span 12', '2xl': 'span 6' }} order={{ xs: 7 }}>
          <Customers />
        </Box> */}
      </Box>
    </>
  );
};

export default Dashboard;
