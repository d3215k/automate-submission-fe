import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import DarkSidebarFullContent from './components/layout/DarkSidebarFullContent';
import TablesStriped from './components/TablesStriped';
import TableRow from './components/TableRow';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback( async() => {
    const response = await axios.get('http://localhost:3000/user');
    setUsers(response.data);
  }) 

  useEffect(() => {
    getData();
  }, []);

  console.info('users', users);

  return (
    <DarkSidebarFullContent>
      <TablesStriped>
        {users.map((user) => (
          <TableRow key={user.id} user={user} />
        ))}
      </TablesStriped>
    </DarkSidebarFullContent>
  )

  return (
    <div className='p-6'>
      <div className='flex flex-col space-y-2'>
        <div>
          <button onClick={handleClick} className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-6 bg-slate-900 text-white hover:bg-slate-700">
            {isLoading ? (
              <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>
                Running...
              </span>
              </>
            ) : 
            <div>Run It Now</div>
            }
          </button>
        </div>

        {result && (
            <div className='mt-6'>
              <div className="text-2xl font-semibold text-gray-900">Result</div>
              <div>
                <div className="text-sm font-semibold text-gray-700">Before</div>
                <img src={result.before} className="w-96" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-700 mt-6">After</div>
                <img src={result.after} className="w-96" />
              </div>
            </div>)
          }
      </div>

    </div>
    
  )
}

export default App
