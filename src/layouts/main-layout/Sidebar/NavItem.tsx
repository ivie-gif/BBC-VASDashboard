import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText, SxProps } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { NavItem as NavItemProps } from 'data/nav-items';
import { useLocation } from 'react-router-dom';

const NavItem = ({ navItem, open }: { navItem: NavItemProps; open: boolean; sx?: SxProps }) => {
  const { pathname } = useLocation();
  return (
    <ListItem
      disablePadding
      sx={{
        display: 'block',
        px: 5,
        borderRight: !open
          ? pathname === navItem.path
            ? `3px solid #1677FF`
            : `3px solid transparent`
          : '',
      }}
    >
      <ListItemButton
        LinkComponent={Link}
        href={navItem.path}
        sx={{
          px: 6,
          bgcolor: pathname === navItem.path ? (open ? '#1677FF' : '') : 'transparent',
          '&:hover': {
            bgcolor: pathname === navItem.path ? (open ? '#1677FF' : '') : 'transparent',
          },
          '& .MuiTouchRipple-root': {
            color: pathname === navItem.path ? '#1677FF' : '#F7F4F8',
          },
        }}
      >
        <ListItemIcon
          sx={{
            width: 20,
            height: 20,
            mr: -1,
            color:
              pathname === navItem.path ? (open ? 'background.default' : '#1677FF') : '#F7F4F8',
          }}
        >
          <IconifyIcon icon={navItem.icon} width={1} height={1}  />
        </ListItemIcon>
        <ListItemText
          primary={navItem.title}
          sx={{
            display: open ? 'inline-block' : 'none',
            ml: 5,
            opacity: open ? 1 : 0,
            color: pathname === navItem.path ? 'background.default' : '#F7F4F8',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;

// #F7F4F8
