
import dayjs from 'dayjs'
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import { useThoughts } from '@context/ProviderThought';

export default function ThoughtCard({ thought }) {
  const router = useRouter();

  const { deleteThought, getThought } = useThoughts();

  const handleDelete = (thoughtId) => {

    toast((t) => (
      <div>
        <p className='text-white py-3'>¿Seguro que quieres borrar el Thought con id <strong>{thought.thoughtId}</strong>?</p>

        <div className='flex items-center justify-between'>
          <button className="bg-red-600 hover:bg-red-500  text-white px-3 py-2 rounded-sm mx-2"
            onClick={() => {
              deleteThought(thoughtId)

              toast.dismiss(t.id)
            }}
          >Borrar</button>

          <button className="bg-indigo-500 hover:bg-indigo-600  text-white px-3 py-2 rounded-sm mx-2"
            onClick={() => { toast.dismiss(t.id) }}
          >Cancelar</button>
        </div>
      </div>
    ), {
      style: {
        background: "#202020"
      }
    })

  }

  // const handleUpdate = () => {
  //   console.log('llama  a la api');
  //   getThought()
  // }

  // format date DD/MM/YYYY
  let date = dayjs(thought.createAt).format('DD/MM/YYYY');

  return (
    <>
      <div
        className="bg-primary w-full text-white rounded-sm shadow-md shadow-black hover:bg-secondary hover:cursor-pointer"
        onClick={() => {
          router.push(`/thoughts/edit/${thought?.thoughtId}`);
        }}
      >
        <div className="px-4 py-5 pt-4">
          <div className="flex justify-between pb-3 items-center">
            <h3 className="text-base">Me siento {thought?.emotion?.emotion}</h3>
            <button
              className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(thought.thoughtId);
              }}
            >
              Borrar
            </button>
          </div>
          <p className="text-sm pb-3">{thought?.thought}</p>
          <div className="w-full justify-end text-right">
            <p className="text-xs items-center">{date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
