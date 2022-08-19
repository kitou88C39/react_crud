import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { deleteUser } from './userSlice';
import moment from 'moment';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <div
        className='flex items-center justify-between p-6 bg-gray-100 shadow-lg'
        key={user.id}
      >
        <div>
          <p className='font-normal text-gray-400'>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <h3 className='text-lg font-bold text-gray-800'>{user.name}</h3>
          <span className='font-normal text-gray-800'>{user.email}</span>
        </div>
        <div className='flex gap-5'>
          <Link to={`edit-user/${user.id}`}>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                />
              </svg>
            </button>
          </Link>
          <button onClick={() => handleRemoveUser(user.id)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>
          <Link to='/'>
            <button>Return</button>
          </Link>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to='/add-user'>
        <Button>Add Post</Button>
      </Link>
      <div className='grid gap-2 md:grid-cols-1'>
        {users.length ? (
          renderCard()
        ) : (
          <p className='col-span-2 text-6xl font-bold text-center text-gray-800'>
            No Title
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
