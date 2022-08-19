import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/Button';
import TextField from '../components/TextField';
import { addUser } from './userSlice';

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const handleAddUser = () => {
    setValues({ name: '', email: '' });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate('/');
  };

  return (
    <div className='max-w-xl mx-auto mt-10'>
      <TextField
        label='Title'
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'title', placeholder: 'Enter a title' }}
      />
      <br />
      <TextField
        label='Content'
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'content', placeholder: 'Enter a content' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
