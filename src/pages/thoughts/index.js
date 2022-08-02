// import useFetch from '@hooks/useFetch.js';
// import PrivateRoute from '@components/AuthenticatedRoute';
import { useAuth } from '@hooks/useAuth';
import endPoints from '@services/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ThoughtCard from '@components/ThoughtCard';

import Modal from '@common/Modal';
import { PlusIcon } from '@heroicons/react/solid';
import FormThought from '@components/FormThought';

export default function Thoughts() {
  const router = useRouter()
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  // thoughts
  const [thoughts, setThoughts] = useState([])

  if (!user) {
    // router.push('/')
  }

  async function getThoughts() {
    const response = await axios.get(endPoints.thoughts.getThoughts)

    setThoughts(response.data)
    // router.push('/thoughts')
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
        <div className="flex justify-between p-2 text-bold text-xl w-full pt-4"><h1>Diario de emociones</h1>
          <div className=" flex lg:mt-0 lg:ml-4">
            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setOpen(true)}
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Nuevo
              </button>
            </span>
          </div>
        </div>

        {
          thoughts.map((thought) => (
            <ThoughtCard thought={thought} key={`Thought-${thought.thoughtId}`} />
          ))
        }
      </div>

      <Modal open={open} setOpen={setOpen}>
        <FormThought></FormThought>
      </Modal>
    </>
  );
}
