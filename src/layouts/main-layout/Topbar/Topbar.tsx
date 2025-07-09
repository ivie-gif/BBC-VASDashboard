import { useState } from 'react';
import {
  Badge,
  Stack,
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactElement } from 'react';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import UserDropdown from './UserDropdown';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useColorMode } from '../../../theme/components/ColorModeProvider';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { useTheme } from '@mui/material';

const Topbar = ({
  open,
  handleDrawerToggle,
}: {
  open: boolean;
  handleDrawerToggle: () => void;
}): ReactElement => {
  const { down } = useBreakpoints();
  const { toggleColorMode, mode } = useColorMode();

  const isMobileScreen = down('sm');
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        left: 0,
        ml: isMobileScreen ? 0 : open ? 60 : 27.5,
        width: isMobileScreen
          ? 1
          : open
          ? `calc(100% - ${drawerOpenWidth}px)`
          : `calc(100% - ${drawerCloseWidth}px)`,
        paddingRight: '0 !important',
      }}
    >
      <Toolbar
        component={Stack}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          bgcolor: 'background.default',
          height: 116,
        }}
      >
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          ml={2.5}
          flex="1 1 52.5%"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <IconifyIcon
              icon={open ? 'ri:menu-unfold-4-line' : 'ri:menu-unfold-3-line'}
              sx={{
                color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
              }}
            />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          gap={3.75}
          alignItems="center"
          justifyContent="flex-end"
          mr={3.75}
          flex="1 1 20%"
        >
          <IconButton onClick={toggleColorMode}>
            {mode === 'dark' ? (
              <ToggleOnIcon fontSize="large" sx={{ color: '#fff' }} />
            ) : (
              <ToggleOffIcon fontSize="large" sx={{ color: '#000' }} />
            )}
          </IconButton>
          <UserDropdown />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
