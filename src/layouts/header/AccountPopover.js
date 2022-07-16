import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem } from '@mui/material';
// routes
// hooks

// components
import MyAvatar from '../../components/MyAvatar';
import MenuPopover from '../../components/MenuPopover';
import { IconButtonAnimate } from '../../components/animate';
import useSettings from '../../hooks/useSettings';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { themeMode, onToggleMode } = useSettings()

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleTheme = () => {
    onToggleMode()
    handleClose()
  }

  return (
    <>
      <IconButtonAnimate
        onClick={handleTheme}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        {/* <MyAvatar /> */}
        <Iconify icon={themeMode === 'light' ? "emojione-monotone:crescent-moon" : "emojione-v1:sun"} />
      </IconButtonAnimate>

      {/* <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            ashish
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            ashish@gmail.com
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleTheme}>
          {themeMode === 'light' ? "Dark Theme" : "Light Theme"}
        </MenuItem>
      </MenuPopover> */}
    </>
  );
}
