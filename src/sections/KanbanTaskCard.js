import PropTypes from 'prop-types';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
// @mui
import { Paper, Typography, Box, Checkbox } from '@mui/material';
// components
import Iconify from '../components/Iconify';
//
import KanbanTaskDetails from './KanbanTaskDetails';

// ----------------------------------------------------------------------

KanbanTaskCard.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onDeleteTask: PropTypes.func,
};

export default function KanbanTaskCard({ card, onDeleteTask, index }) {
  const { name, attachments } = card;

  const [openDetails, setOpenDetails] = useState(false);

  const [completed, setCompleted] = useState(card.completed);

  const handleOpenDetails = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleChangeComplete = (event) => {
    setCompleted(event.target.checked);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Paper
            sx={{
              px: 2,
              width: 1,
              position: 'relative',
              boxShadow: (theme) => theme.customShadows.z1,
              '&:hover': {
                boxShadow: (theme) => theme.customShadows.z16,
              },
            }}
          >
            <Box onClick={handleOpenDetails} sx={{ cursor: 'pointer' }}>
              <Typography
                noWrap
                variant="subtitle2"
                sx={{
                  py: 3,
                  pl: 5,
                  transition: (theme) =>
                    theme.transitions.create('opacity', {
                      duration: theme.transitions.duration.shortest,
                    }),
                  ...(completed && { opacity: 0.48, textDecoration: "line-through" }),
                }}
              >
                {name}
              </Typography>
            </Box>

            <Checkbox
              disableRipple
              checked={completed}
              icon={<Iconify icon={'eva:radio-button-off-outline'} />}
              checkedIcon={<Iconify icon={'eva:checkmark-circle-2-outline'} />}
              onChange={handleChangeComplete}
              sx={{ position: 'absolute', bottom: 15 }}
            />
          </Paper>

          <KanbanTaskDetails
            card={card}
            isOpen={openDetails}
            onClose={handleCloseDetails}
            onDeleteTask={() => onDeleteTask(card.id)}
          />
        </div>
      )}
    </Draggable>
  );
}
