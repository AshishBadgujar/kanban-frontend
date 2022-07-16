import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link, ListItemText } from '@mui/material';
//
import Iconify from '../../Iconify';
import { ListItemStyle, ListItemTextStyle, ListItemIconStyle } from './style';

// ----------------------------------------------------------------------

NavItemRoot.propTypes = {
  active: PropTypes.bool,
  open: PropTypes.bool,
  isCollapse: PropTypes.bool,
  onOpen: PropTypes.func,
  item: PropTypes.shape({
    // children: PropTypes.array,
    icon: PropTypes.any,
    info: PropTypes.any,
    title: PropTypes.string,
  }),
};

export function NavItemRoot({ item, isCollapse, open = false, active, onOpen }) {
  const { title, icon, info } = item;

  // if (children) {
  //   return (
  //     <ListItemStyle onClick={onOpen} activeRoot={active}>
  //       {renderContent}
  //     </ListItemStyle>
  //   );
  // }
  return (
    <ListItemStyle>
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      <ListItemTextStyle disableTypography primary={title} isCollapse={isCollapse} />
      {!isCollapse && (
        <>
          {info && info}
          {/* {children && <ArrowIcon open={open} />} */}
        </>
      )}
    </ListItemStyle>
  )
}

// ----------------------------------------------------------------------

NavItemSub.propTypes = {
  active: PropTypes.bool,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  item: PropTypes.shape({
    info: PropTypes.any,
    title: PropTypes.string,
  }),
};

export function NavItemSub({ item, open = false, active = false, onOpen }) {
  const { title, info } = item;

  return (
    <ListItemStyle activeSub={active} subItem>
      <DotIcon active={active} />
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  )
}

// ----------------------------------------------------------------------

DotIcon.propTypes = {
  active: PropTypes.bool,
};

export function DotIcon({ active }) {
  return (
    <ListItemIconStyle>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: 'scale(2)',
            bgcolor: 'primary.main',
          }),
        }}
      />
    </ListItemIconStyle>
  );
}
