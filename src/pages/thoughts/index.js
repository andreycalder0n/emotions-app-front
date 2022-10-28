import { useState } from 'react';
import { useThoughts } from '@context/ProviderThought';
import MainLayout from '@layout/MainLayout.js';
import Modal from '@common/Modal';
import FormThought from '@components/FormThought';
import CardThought from '@components/CardThought';

export default function Thoughts() {
  // modal form thought
  const [open, setOpen] = useState(false);

  // const { user } = useAuth();

  // thoughts
  const { thoughts, getThoughts } = useThoughts();

  const titleModal = 'Thought'

  return (
    <>
      <MainLayout>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 px-2">
          <header className='flex justify-between p-2 text-bold text-xl w-full pt-4 items-center'>
            <h1 className='Title'>Diario de emociones</h1>

            <p>{thoughts.length}</p>
            <div className="flex items-end justify-end flex-row">
              <button
                type="button"
                className="px-3 py-2 bg-primary hover:bg-secondary text-white rounded-md ml-2"
                onClick={() => {
                  getThoughts()
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>

              <button
                type="button"
                className="px-3 py-2 bg-primary hover:bg-secondary text-white rounded-md ml-2"
                onClick={() => setOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </header>
          {/* thoughts list */}
          {
            thoughts?.map((thought) => (
              <CardThought thought={thought} key={`Thought-${thought.thoughtId}`} />
            ))
          }
        </div>

        {/* thought form */}
        <Modal open={open} setOpen={setOpen} title={titleModal}>
          <FormThought setOpen={setOpen} />
        </Modal>
      </MainLayout>
    </>
  );
}
