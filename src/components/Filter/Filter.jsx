import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from 'redux/contacts/contactsSlice';

function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
}

export default Filter;
