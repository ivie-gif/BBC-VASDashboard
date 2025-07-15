import { ReactElement } from 'react';
import { Link, List, Toolbar, Typography } from '@mui/material';
import navItems from 'data/nav-items';
import SimpleBar from 'simplebar-react';
import NavItem from './NavItem';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import { rootPaths } from 'routes/paths';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  return (
    <>
      <Toolbar
        sx={{
          position: 'fixed',
          height: 80,
          zIndex: 1,
          bgcolor: '#D36128',
          p: 0,
          justifyContent: 'center',
          width: open ? drawerOpenWidth - 1 : drawerCloseWidth - 1,
        }}
      >
        <Link href={rootPaths.homeRoot} sx={{ textDecoration: 'none' }}>
          {open ? (
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#000' }}>
              BroadBased
            </Typography>
          ) : (
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#000' }}>
              BBC
            </Typography>
          )}
        </Link>
      </Toolbar>
      <SimpleBar
        style={{
          maxHeight: '100vh',
        }}
      >
        <List
          component="nav"
          sx={{
            mt: 24.5,
            height: 724,
            position: 'fixed',
          }}
        >
          {navItems.map((navItem) => (
            <NavItem key={navItem.id} navItem={navItem} open={open} />
          ))}
        </List>
      </SimpleBar>
    </>
  );
};

export default Sidebar;
