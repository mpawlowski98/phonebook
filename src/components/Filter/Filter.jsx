import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from 'redux/contacts/contactsSlice';

function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <TextField
      type="text"
      value={value}
      onChange={handleChange}
      label="Find contacts by name"
      variant="outlined"
      fullWidth
    />
  );
}

export default Filter;
