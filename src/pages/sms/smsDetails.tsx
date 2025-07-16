import { Box, Typography } from '@mui/material';
import { ReusableTable, HeadCell } from '../../reusables/newTable';

type Dessert = {
  id: number | string;
  createdAt: number;
  status: string;
  message: string;
  network: string;
  recipient: number;
  senderId: string;
  smsRoute: string;
};

const rows: Dessert[] = [
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
  {
    id: 148769,
    createdAt: 1688721600000,
    status: 'Sent',
    message: 'Hello',
    network: 'MTN',
    recipient: 8097398272,
    senderId: 'Emma',
    smsRoute: 'MTN',
  },
];

const headCells: HeadCell<Dessert>[] = [
  { id: 'id', label: 'Id', disablePadding: true },
  { id: 'createdAt', label: 'Created At', numeric: true },
  { id: 'status', label: 'Status', numeric: true },
  { id: 'message', label: 'Message', numeric: true },
  { id: 'network', label: 'Network', numeric: true },
  { id: 'recipient', label: 'Recipient', numeric: true },
  { id: 'senderId', label: 'Sender Id', numeric: true },
  { id: 'smsRoute', label: 'SMS Route', numeric: true },
];

const SMSDetails = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mt: -8,
          color: (theme) => (theme.palette.mode === 'dark' ? '#F2F2F2' : '#212529'),
          fontSize: '20px',
          fontWeight: 600,
        }}
      >
        SMS Transaction Details
      </Typography>
      <Typography
        variant="subtitle1"
        color={(theme) => (theme.palette.mode === 'dark' ? 'common.dark' : '#212529')}
        mb={1.25}
      >
        9 <span style={{ fontSize: '12px', fontWeight: 600, marginLeft: '-3px' }}>Records Found</span>
      </Typography>

      <ReusableTable<Dessert> rows={rows} headCells={headCells} rowKey="id" showCheckbox={false} />
    </Box>
  );
};

export default SMSDetails;
