import { Fragment, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';

import { addThought } from '@services/api/thoughts';
import useFetch from '@hooks/useFetch.js';
import endPoints from '@services/api';
// import { useAuth } from '@hooks/useAuth';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FormThought() {
  const emotions = useFetch(endPoints.emotions.getEmotions);

  // reference to form
  const formRef = useRef(null);
  // handle routes
  const router = useRouter();

  const [selected, setSelected] = useState([emotions]);

  const {
    register, // datos del formulario obtenidos mediante react-hook-form
    handleSubmit, //react-hook-form
    formState: { errors }, // manejo de las validaciones react-hook-form
    control,
  } = useForm({});

  const onSubmit = () => {
    // obtener valor del formulario
    const formData = new FormData(formRef.current);

    // estructura though a guardar
    const data = {
      thought: formData.get('thought'),
      emotionId: selected.emotionId,
    };

    addThought(data);
    router.push('/dashboard');
  };

  return (
    <>
      <div className="md:grid md:grid-cols-1">
        <div className="mt-4 md:mt-0 md:col-span-1">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)} // react-hook-form
          >
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:pb-9">
                <div>
                  <label htmlFor="thought" className="block text-sm font-medium text-gray-700">
                    ¿Qué estás pensando?
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="thought"
                      {...register('thought', {
                        required: 'Este campo es requerido',
                        minLength: {
                          value: 4,
                          message: 'Escribe al menos 4 carácteres',
                        },
                      })}
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-1"
                      placeholder="Mis pensamientos acerca de ..."
                    />
                    <p className=" sm:pt-1 block text-xs font-medium text-red-600">{errors?.thought?.message}</p>
                  </div>

                  <Controller
                    control={control}
                    name="emotion"
                    render={({ field }) => (
                      <Listbox {...field} value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700 mt-3">Me estoy sintiendo</Listbox.Label>

                            <div className="mt-1 relative">
                              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-8">
                                <span className="flex items-center">
                                  <span className="ml-3 block truncate">{selected.emotion}</span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                              </Listbox.Button>

                              <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                  {emotions.map((emotion) => (
                                    <Listbox.Option
                                      key={`emoti-${emotion.emotionId}`}
                                      className={({ active }) => classNames(active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
                                      value={emotion}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>{emotion.emotion}</span>
                                          </div>

                                          {selected ? (
                                            <span className={classNames(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4')}>
                                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    )}
                  />
                </div>

                <div>
                  <p className="mt-2 text-sm text-gray-500">Nadie te hace sentir enojado, nadie te hace sentir nada.</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
