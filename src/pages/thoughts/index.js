// import useFetch from '@hooks/useFetch.js';
// import PrivateRoute from '@components/AuthenticatedRoute';
import { useAuth } from '@hooks/useAuth';
import endPoints from '@services/api';
import axios from 'axios';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { useAuth } from '@hooks/useAuth';
import ThoughtCard from '@components/ThoughtCard';

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
      <div className='max-w-7xl mx-auto flex flex-col items-center gap-3 px-2'>
        <div className="flex justify-start p-2 text-bold text-lg w-full pt-4"><h1>Diario de emociones</h1></div>

        {
          thoughts.map((thought) => (
            <ThoughtCard thought={thought} key={`Thought-${thought.thoughtId}`} />
          ))
        }
      </div>
    </>
  );
}
