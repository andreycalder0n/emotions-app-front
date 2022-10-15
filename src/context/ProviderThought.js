import dayjs from 'dayjs'
import { useState, useContext, useEffect, createContext } from 'react';
import { addThoughtRequest, getThoughtRequest, getThoughtsRequest, deleteThoughtRequest, updateThoughtRequest } from '@services/api/thoughtsRequest'

// container thoughts context
const ThoughtContext = createContext();

// use thought context
export const useThoughts = () => {
  const context = useContext(ThoughtContext);
  return context;
}

// propoagate thought context
export const ProviderThought = ({ children }) => {
  // thought context
  // thoughts
  const [thoughts, setThoughts] = useState([])

  // save state thoughts
  const getThoughts = async () => {
    const response = await getThoughtsRequest()

    setThoughts(response.data);
  }

  // onload page
  // useEffect(() => {
  //   getThoughts();
  // }, [])

  // add thought
  const addThought = async (thought) => {

    let createAt = dayjs(`${thought.createAt} ${thought.hora}`).format('YYYY-MM-DDTHH:mm:ss');

    delete thought.hora

    const newThought = {
      ...thought,
      createAt: createAt
    }

    await addThoughtRequest(newThought)

    getThoughts()
  }

  // get thought by id
  const getThought = async (thoughtId) => {

    const response = await getThoughtRequest(thoughtId)

    //formatear fecha
    const formaterCreateAt = dayjs(response.data[0].createAt).format('YYYY-MM-DD')
    //obtener hora
    const formaterHora = dayjs(response.data[0].createAt).format('HH:mm:ss')

    const thought = {
      ...response.data[0],
      createAt: formaterCreateAt,
      hora: formaterHora
    }

    return thought;
  }

  // delete thought
  const deleteThought = async (thoughtId) => {
    await deleteThoughtRequest(thoughtId)
    getThoughts()
  }

  const updateThought = async (thoughtId, changes) => {
    let createAt = dayjs(`${changes.createAt} ${changes.hora}`).format('YYYY-MM-DDTHH:mm:ss');

    delete changes.hora

    const update = {
      ...changes,
      createAt: createAt
    }

    await updateThoughtRequest(thoughtId, update);

    await getThoughts()
  }

  // context component
  return <ThoughtContext.Provider value={{
    thoughts,
    setThoughts,
    getThoughts,
    addThought,
    getThought,
    deleteThought,
    updateThought
  }}>
    {children}
  </ThoughtContext.Provider>
}
