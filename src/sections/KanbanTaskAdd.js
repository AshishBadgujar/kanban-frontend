import PropTypes from 'prop-types';
import { format, isSameDay, isSameMonth } from 'date-fns';
import { useState } from 'react';
// @mui
import { Box, Paper, Stack, Tooltip, Checkbox, IconButton, OutlinedInput, ClickAwayListener } from '@mui/material';
import { MobileDateRangePicker } from '@mui/lab';
import Iconify from '../components/Iconify';

// ----------------------------------------------------------------------

const defaultTask = {
  description: '',
};

KanbanTaskAdd.propTypes = {
  onAddTask: PropTypes.func,
  onCloseAddTask: PropTypes.func,
};

export default function KanbanTaskAdd({ onAddTask, onCloseAddTask }) {
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleKeyUpAddTask = (event) => {
    if (event.key === 'Enter') {
      if (name.trim() !== '') {
        onAddTask({ ...defaultTask, name, completed });
      }
    }
  };

  const handleClickAddTask = () => {
    if (name) {
      onAddTask({ ...defaultTask, name, completed });
    }
    onCloseAddTask();
  };

  const handleChangeCompleted = (event) => {
    setCompleted(event.target.checked);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAddTask}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <OutlinedInput
            multiline
            size="small"
            placeholder="Task name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyUp={handleKeyUpAddTask}
            sx={{
              '& input': { p: 0 },
              '& fieldset': { borderColor: 'transparent !important' },
            }}
          />
        </Paper>
      </ClickAwayListener>
    </>
  );
}
