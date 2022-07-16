import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { List, Collapse } from '@mui/material';
//
import { NavItemRoot, NavItemSub } from './NavItem';
// import { getActive } from '..';

// ----------------------------------------------------------------------

NavListRoot.propTypes = {
  isCollapse: PropTypes.bool,
  list: PropTypes.object,
};

export function NavListRoot({ list, isCollapse }) {

  // const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(true);

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <NavItemRoot item={list} isCollapse={isCollapse} open={open} onOpen={() => setOpen(!open)} />

        {!isCollapse && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {(list.children || []).map((item) => (
                <NavListSub key={item.title} list={item} />
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return <NavItemRoot item={list} isCollapse={isCollapse} />;
}

// ----------------------------------------------------------------------

NavListSub.propTypes = {
  list: PropTypes.object,
};

function NavListSub({ list }) {

  const [open, setOpen] = useState(true);

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <NavItemSub item={list} onOpen={() => setOpen(!open)} open={open} />

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 3 }}>
            {(list.children || []).map((item) => (
              <NavItemSub key={item.title} item={item} />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return <NavItemSub item={list} />;
}
