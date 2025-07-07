// import totalSales from 'assets/images/todays-sales/total-sales.png';
// import totalOrder from 'assets/images/todays-sales/total-order.png';
// import productSold from 'assets/images/todays-sales/product-sold.png';
// import newCustomer from 'assets/images/todays-sales/new-customer.png';

// import { SmsIcon } from '@mui/icons-material';
import SmsIcon from '@mui/icons-material/Sms';

export interface SaleItem {
  id?: number;
  icon: any;
  title: string;
  subtitle: string;
  increment: number;  
  color: string;
}

// const elementType 

const salesData: SaleItem[] = [
  {
    id: 1,
    icon: SmsIcon,
    title: '$5k',
    subtitle: 'Total SMSes Today',
    increment: 10,
    color: 'warning.main',
  },
  {
    id: 2,
    icon: SmsIcon,
    title: '500',
    subtitle: 'Total SMSes This Month',
    increment: 8,
    color: 'primary.main',
  },
  // {
  //   id: 3,
  //   icon: productSold,
  //   title: '9',
  //   subtitle: 'Product Sold',
  //   increment: 2,
  //   color: 'secondary.main',
  // },
  // {
  //   id: 4,
  //   icon: newCustomer,
  //   title: '12',
  //   subtitle: 'New Customer',
  //   increment: 3,
  //   color: 'info.main',
  // },
];

export default salesData;
