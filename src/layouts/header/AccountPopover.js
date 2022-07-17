import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
// routes
// hooks

// components

import { IconButtonAnimate } from '../../components/animate';
import useSettings from '../../hooks/useSettings';
import Iconify from '../../components/Iconify';

export default function AccountPopover() {
  const { themeMode, onToggleMode } = useSettings()

  const [open, setOpen] = useState(null);

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
        <Iconify icon={themeMode === 'light' ? "emojione-monotone:crescent-moon" : "emojione-v1:sun"} />
      </IconButtonAnimate>
    </>
  );
}
