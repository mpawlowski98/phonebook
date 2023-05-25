import {
  Button,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';

function ContactListItem({ name, number, onDelete }) {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={number} />
      <ListItemSecondaryAction>
        <Button
          type="button"
          variant="contained"
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
