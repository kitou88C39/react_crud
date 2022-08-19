import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, navigate);
  };

  return (
    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
        <h1 className='text-3xl font-semibold text-center underline text-emerald-500'>
          LogIn
        </h1>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label
              for='email'
              className='block text-sm font-semibold text-gray-800'
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              type='email'
              className='block w-full px-4 py-2 mt-2 bg-white border rounded-md text-emerald-600 focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label
              for='password'
              className='block text-sm font-semibold text-gray-800'
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              type='password'
              className='block w-full px-4 py-2 mt-2 bg-white border rounded-md text-emerald-700 focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mt-6'>
            <Link to='/'>
              <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600'>
                LogIn
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
