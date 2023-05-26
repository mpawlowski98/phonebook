import React from 'react';
import {
  Button,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';

function ContactListItem({ name, number, onDelete }) {
  return (
    <ListItem>
      <ListItemText
        primary={<Typography variant="h6">{name}</Typography>}
        secondary={<Typography variant="subtitle1">{number}</Typography>}
      />
      <ListItemSecondaryAction>
        <Button
          type="button"
          variant="contained"
          color="error"
          disableElevation
          onClick={onDelete}
        >
          Delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ContactListItem;
