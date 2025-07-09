import { Box, Link, Stack, Typography } from '@mui/material';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { ReactElement } from 'react';
import { useTheme } from '@mui/material';

const Footer = ({ open }: { open: boolean }): ReactElement => {
  const { down } = useBreakpoints();
  const year = new Date().getFullYear();
  const theme = useTheme();

  const isMobileScreen = down('sm');

  return (
    <Stack
      component="footer"
      direction="row"
      justifyContent={{ xs: 'center', sm: 'flex-end' }}
      ml={isMobileScreen ? 0 : open ? 60 : 27.5}
      pr={{ xs: 3, sm: 5.175 }}
      pb={6.25}
      pl={{ xs: 3, sm: 5.25 }}
    >
      <Typography
        sx={{
          textAlign: { xs: 'center', sm: 'right' },
          mt: 10,
        }}
      >
        <Box
          component="span"
          sx={{
            verticalAlign: 'middle',
            color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
          }}
        >
          &copy; Broadbased Communications, {year}.
        </Box>
      </Typography>
    </Stack>
  );
};

export default Footer;
