import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function CustomDateTimeRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        {/* <DateTimePicker  /> */}

        <DateTimePicker
          slotProps={{
            openPickerIcon: {
              sx: {
                // color: 'success.main',
                color: (theme) => (theme.palette.mode === 'dark' ? '#D36128' : '#D36128'),
                fontSize: 28,
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
