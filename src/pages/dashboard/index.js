import { useState } from 'react';

import Modal from '@common/Modal';
import { PlusIcon } from '@heroicons/react/solid';
import FormThought from '@components/FormThought';


export default function Dashboard() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between m-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl leading-7 text-gray-900 text-semibold sm:text-2xl sm:truncate">Vivir con propósito</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpen(true)}
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Nuevo
            </button>
          </span>
        </div>
      </div>

      <Modal open={open} setOpen={setOpen}>
        <FormThought></FormThought>
      </Modal>
    </>
  );
};
