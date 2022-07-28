// import useFetch from '@hooks/useFetch.js';
// import PrivateRoute from '@components/AuthenticatedRoute';
import { useAuth } from '@hooks/useAuth';
import endPoints from '@services/api';
import axios from 'axios';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { useAuth } from '@hooks/useAuth';

export default function Thoughts() {
  // const router = useRouter()
  const { user } = useAuth();

  // thoughts
  const [thoughts, setThoughts] = useState([])

  if (!user) {
    // router.push('/')
  }

  async function getThoughts() {
    const response = await axios.get(endPoints.thoughts.getThoughts)

    setThoughts(response.data)
  }

  try {
    useEffect(() => {
      getThoughts();
    }, [])
  } catch (error) {
    console.log('Error in thoughts');
    // console.log(error);
  }

  return (
    <>
      <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <p>Ruta inicial donde se listaran todos los thoughts</p>

        {
          thoughts.map((thought) => {
            return (
              <div key={`thought-${thought.thoughtId}`}>
                <h1  >{thought.thought}</h1>
              </div>
            )
          })
        }
      </div>
    </>
  );
}
