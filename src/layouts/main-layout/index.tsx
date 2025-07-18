import { useState, ReactElement, PropsWithChildren } from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

export const drawerOpenWidth = 240;
export const drawerCloseWidth = 110;
export const drawerColor = (theme: { palette: { mode: string; }; }) => (theme.palette.mode === 'dark' ? '' : '#001529');

const MainLayout = ({ children }: PropsWithChildren): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const handleDrawerToggle = () => setOpen(!open);

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Topbar open={open} handleDrawerToggle={handleDrawerToggle} />
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerOpenWidth, bgcolor: drawerColor },
          }}
        >
          <Sidebar open={open} />
        </Drawer>
        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          component="aside"
          open={open}
          sx={{
            display: { xs: 'none', sm: 'block' },
            width: open ? drawerOpenWidth : drawerCloseWidth,
            '& .MuiDrawer-paper': {
              width: open ? drawerOpenWidth : drawerCloseWidth, bgcolor: drawerColor,
            },
          }}
        >
          <Sidebar open={open} />
        </Drawer>
        <Box
          component="main"
          overflow="auto"
          sx={{
            width: 1,
            flexGrow: 1,
            pt: 5,
            pr: { xs: 3, sm: 5.175 },
            pb: 6.25,
            pl: { xs: 3, sm: 5.25 },
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '' : '#F5F5F5'),
          }}
        >
          <Toolbar
            sx={{
              height: 96,
              mt: 10,
            }}
          />
          {children}
        </Box>
      </Box>
      <Box sx={{bgcolor: (theme) => (theme.palette.mode === 'dark' ? '' : '#F5F5F5')}}>
      <Footer open={open} />
      </Box>
    </>
  );
};

export default MainLayout;
