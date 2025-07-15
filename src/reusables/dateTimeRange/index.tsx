import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function CustomDateTimeRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          slotProps={{
            openPickerIcon: {
              sx: {
                color: (theme) => (theme.palette.mode === 'dark' ? '#D36128' : '#000'),
                fontSize: 20,
              },
            },
            actionBar: {
              actions: ['cancel', 'accept'],
              sx: {
                '& .MuiButton-root': {
                  textTransform: 'none',
                  fontSize: 12,
                },
                '& .MuiButton-root:nth-of-type(1)': {
                  color: '#1677FF',
                  border: '1px solid #1677FF',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                },
                '& .MuiButton-root:nth-of-type(2)': {
                  color: '#fff',
                  backgroundColor: '#1677FF',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#1677FF',
                  },
                },
              },
            },
            layout: {
              sx: {
                '.MuiPickersLayout-actionBar': {
                  mt: 1,
                },
                '.MuiPickersLayout-contentWrapper': {
                  gap: 1,
                },
                '.MuiMultiSectionDigitalClockSection-item:first-of-type': {
                  marginTop: 4,
                },
                '.MuiMultiSectionDigitalClockSection-item': {
                  minHeight: 20,
                  fontSize: 12,
                  gap: 16,
                },
                '.MuiMultiSectionDigitalClockSection-root': {
                  gap: 0.5,
                },
              },
            },
            textField: {
              sx: {
                '& .MuiInputBase-root': {
                  gap: -0.5,
                  padding: '2px 2px',
                },
                '& .MuiInputAdornment-root': {
                  margin: 0,
                },
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
