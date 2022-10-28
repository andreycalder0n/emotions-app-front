import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { StopIcon } from '@heroicons/react/outline'
import * as Yup from "yup";
import dayjs from 'dayjs'

import { useThoughts } from '@context/ProviderThought'
import useFetch from '@hooks/useFetch.js';
import endPoints from '@services/api/endPoints.js';

export default function FormThought({ setOpen }) {
  //! move to context
  // emotions
  const emotions = useFetch(endPoints.emotions.getEmotions);

  // context thought
  const { addThought, getThought, updateThought } = useThoughts();

  // thought default
  const [thought, setThought] = useState({
    thought: '',
    emotionId: '',
    createAt: dayjs(new Date).format('YYYY-MM-DD'),
    hora: dayjs(new Date).format('HH:mm:ss')
  });

  // router
  const router = useRouter();

  const params = router.query;

  useEffect(() => {
    if (params.id) {
      (async () => {
        const data = await getThought(params.id)

        setThought(data)
      })();
    }
  }, []
  )

  const HeaderForm = () => {

    return (
      <header className='flex justify-between items-center py-4 font-bold text-primary'>
        <h3 className='text-xl'>Thought edit</h3>

        <p className='text-sm block  pt-2 pb-1 mr-3' onClick={() => {
          router.push('/thoughts')
        }}>Atrás</p>
      </header>
    )

  }

  // component error
  const pError = (name) => {
    return (
      <ErrorMessage component='p' className='text-red-600 text-sm' name={name} />
    )
  }

  // component select
  const selectInput = (data, field) => {
    return (
      <div className="inline-block relative w-full mt-1">
        <Field component='select' name={field} className="px-3 py-2 focus:outline-none rounded text-primary w-full border-solid border-2 border-sky-900">
          {
            params.id ? (<option value={emotions.emotionId}>{emotions.emotion}</option>) : <option>Selecciona una emoción</option>
          }
          {
            data.map((item) => (<option value={item.emotionId} key={`emotion-${item.emotionId}`}>{item.emotion}</option>))
          }
        </Field>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-white p-3 pt-0 w-full">
          {params.id ? HeaderForm() : ""}
          <Formik
            initialValues={thought}

            validationSchema={Yup.object({
              thought: Yup.string().required('Este campo es requerido'),
              emotionId: Yup.string().required('Este campo es requerido'),
              createAt: Yup.date().required('Ingresa fecha'),
              hora: Yup.string().required('Ingresa fecha')
            })}

            // send form
            onSubmit={(values, actions) => {

              if (params.id) {
                updateThought(params.id, values)
                router.push('/thoughts')
              } else {
                addThought(values);
                setOpen(false);
                router.push('/thoughts')
              }

              //! ??????????
              actions.setSubmitting(false)
            }}

            //! ??????????
            enableReinitialize
          >

            {/* Thought form  */}
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:pb-9">
                    <div>
                      <label htmlFor="thought" className="text-sm block font-bold text-primary pt-2 pb-1">
                        ¿Qué estás pensando?
                      </label>
                      <div className="mt-1">
                        <Field
                          component="textarea"
                          name="thought"
                          rows={3}
                          className="px-3 py-2 focus:outline-none rounded text-primary w-full border-solid border-2 border-sky-900"
                          placeholder="Mis pensamientos acerca de ..."
                        />
                        {pError('thought')}
                      </div>

                      <label htmlFor="emotionId" className="text-sm block font-bold text-primary pt-2 pb-1">
                        Me estoy sintiendo...
                      </label>
                      {selectInput(emotions, 'emotionId')}
                      {pError('emotionId')}

                      <label htmlFor='createAt' className='text-sm block font-bold text-primary pt-2 pb-1'>Fecha</label>

                      <Field
                        type='date'
                        name='createAt' placeolder='Ingresa fecha' className='px-3 py-2 focus:outline-none rounded text-primary w-full border-solid border-2 border-sky-900' />
                      {pError('createAt')}

                      <label htmlFor='hora' className='text-sm block font-bold text-primary pt-2 pb-1'>Hora</label>

                      <Field
                        type='time'
                        name='hora' placeolder='Ingresa fecha' className='px-3 py-2 focus:outline-none rounded text-primary w-full border-solid border-2 border-sky-900' />
                      {pError('hora')}

                    </div>

                    <div>
                      <p className="text-sm block font-bold text-primary pt-2 pb-1">Nadie te hace sentir enojado, nadie te hace sentir nada.</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary"
                      disabled={isSubmitting}
                    >
                      {/* Guardar */}
                      {isSubmitting ? (
                        <StopIcon className='animate-spin h-5 w-5' />
                      ) : 'Guardar'}
                    </button>
                  </div>
                </div>
              </Form>
            )}

          </Formik>
        </div>
      </div>
    </>
  )
}
