import { ReactElement } from 'react';
import { Link, List, Toolbar, Typography } from '@mui/material';
import navItems from 'data/nav-items';
import SimpleBar from 'simplebar-react';
import NavItem from './NavItem';
import { drawerCloseWidth, drawerOpenWidth } from '..';
import Image from 'components/base/Image';
import { rootPaths } from 'routes/paths';
import LogoImg from '../../../assets/logoImg.png';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  return (
    <>
      <Toolbar
        sx={{
          position: 'fixed',
          height: 98,
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
            // <Image src={LogoImg} alt="logo" height={40} />
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#000' }}>
            BBC
          </Typography>
          )}
        </Link>
      </Toolbar>
      <SimpleBar style={{ maxHeight: '100vh' }}>
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
