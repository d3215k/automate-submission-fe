import React from 'react';
import axios from 'axios';
import { IconCircleCheckFilled, IconCircleXFilled, IconPhoto } from '@tabler/icons-react';

export default function TableRow({ user }) {
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isRunning, setIsRunning] = React.useState(false);
  const [status, setStatus] = React.useState('unregistered');

  const handleClick = async () => {
    setIsRunning(true);
    try {
      const response = await axios.post(`http://localhost:3000/submission/${user.id}`);
      const data = response.data;
      setStatus('registered');
      setResult(data.result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsRunning(false);
    }

  }

  return (
  <tr>
    <td className="p-3 font-medium ">
      <div className='flex items-center'>
        { status === 'unregistered' 
          ? <IconCircleXFilled className='text-yellow-400 mr-2' />
          : <IconCircleCheckFilled className='text-green-400 mr-2' />
        }
        {/* <IconCircleXFilled className='text-yellow-400 mr-2' /> */}
        <span>https://laravel-jetstream-livewire.test/</span>
      </div>
    </td>
    <td className="p-3">
      <p className="font-medium">
        {user?.name}
      </p>
      <p className="text-gray-500">
        {user?.email}
      </p>
    </td>
    <td className="p-3 text-center">
      { status === 'unregistered'
        ? <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-yellow-700 bg-yellow-200">
            {status}
          </div>
        : <div className="font-semibold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-green-700 bg-green-200">
          {status}
          </div>
      }
    </td>
    <td className="p-3 text-center">
        { result && (
          <a href={result} target="_blank" className='inline-flex justify-center items-center'>
          <IconPhoto  />
          </a>
        )}
    </td>
    <td className="p-3 text-center">
      <button onClick={handleClick} type="button" className="inline-flex w-40 justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-2 leading-5 text-sm rounded bg-slate-900 text-white hover:bg-slate-700">
      {isRunning 
      ? (
        <>
        <svg className="animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>
          Registering...
        </span>
        </>
      ) : 
        <div>Register</div>
      }
      </button>
    </td>
  </tr>
  )
}