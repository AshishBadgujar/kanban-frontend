import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Drawer,
  Button,
  Avatar,
  Tooltip,
  Divider,
  MenuItem,
  TextField,
  Typography,
  OutlinedInput,
} from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Iconify from '../components/Iconify';
import Scrollbar from '../components/Scrollbar';
import { IconButtonAnimate } from '../components/animate';

// ----------------------------------------------------------------------

const PRIORITIZES = ['low', 'medium', 'hight'];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  width: 140,
  fontSize: 13,
  flexShrink: 0,
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

KanbanTaskDetails.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  card: PropTypes.object,
  onDeleteTask: PropTypes.func,
};

export default function KanbanTaskDetails({ card, isOpen, onClose, onDeleteTask }) {
  const isDesktop = useResponsive('up', 'sm');
  const [taskCompleted, setTaskCompleted] = useState(card.completed);
  const [prioritize, setPrioritize] = useState('low');

  const { name, description } = card;

  const handleToggleCompleted = () => {
    setTaskCompleted((prev) => !prev);
  };

  const handleChangePrioritize = (event) => {
    setPrioritize(event.target.value);
  };

  return (
    <>
      <Drawer open={isOpen} onClose={onClose} anchor="right" PaperProps={{ sx: { width: { xs: 1, sm: 480 } } }}>
        <Stack p={2.5} direction="row" alignItems="center">
          {!isDesktop && (
            <>
              <Tooltip title="Back">
                <IconButtonAnimate onClick={onClose} sx={{ mr: 1 }}>
                  <Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />
                </IconButtonAnimate>
              </Tooltip>
            </>
          )}
          <Button
            size="small"
            variant="outlined"
            color={taskCompleted ? 'primary' : 'inherit'}
            startIcon={!taskCompleted && <Iconify icon={'eva:checkmark-fill'} width={16} height={16} />}
            onClick={handleToggleCompleted}
          >
            {taskCompleted ? 'Complete' : 'Mark complete'}
          </Button>
          <Stack direction="row" spacing={1} justifyContent="flex-end" flexGrow={1}>
            <Tooltip title="Delete task">
              <IconButtonAnimate onClick={onDeleteTask} size="small">
                <Iconify icon={'eva:trash-2-outline'} width={20} height={20} />
              </IconButtonAnimate>
            </Tooltip>
          </Stack>
        </Stack>
        <Divider />
        <Scrollbar>
          <Stack spacing={3} sx={{ px: 2.5, py: 3 }}>
            <OutlinedInput
              fullWidth
              multiline
              size="small"
              placeholder="Task name"
              value={name}
              sx={{
                typography: 'h6',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
              }}
            />

            <Stack direction="row" alignItems="center" sx={{ pl: 2 }}>
              <LabelStyle>Prioritize</LabelStyle>
              <TextField
                fullWidth
                select
                size="small"
                value={prioritize}
                onChange={handleChangePrioritize}
                sx={{
                  '& svg': { display: 'none' },
                  '& fieldset': { display: 'none' },
                  '& .MuiSelect-select': { p: 0, display: 'flex', alignItems: 'center' },
                }}
              >
                {PRIORITIZES.map((option) => (
                  <MenuItem key={option} value={option} sx={{ mx: 1, my: 0.5, borderRadius: 1 }}>
                    <Box
                      sx={{
                        mr: 1,
                        width: 14,
                        height: 14,
                        borderRadius: 0.5,
                        bgcolor: 'error.main',
                        ...(option === 'low' && { bgcolor: 'info.main' }),
                        ...(option === 'medium' && { bgcolor: 'warning.main' }),
                      }}
                    />
                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                      {option}
                    </Typography>
                  </MenuItem>
                ))}
              </TextField>
            </Stack>

            <Stack direction="row" sx={{ pl: 2 }}>
              <LabelStyle sx={{ mt: 2 }}>Description</LabelStyle>
              <OutlinedInput
                fullWidth
                multiline
                rows={3}
                size="small"
                placeholder="Task name"
                value={description}
                sx={{ typography: 'body2' }}
              />
            </Stack>
          </Stack>
        </Scrollbar>
        <Divider />
      </Drawer>
    </>
  );
}
