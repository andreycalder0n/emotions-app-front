import axios from 'axios';
import endPoints from '@services/api/endPoints';

const getThoughtsRequest = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    },
  };

  // request axios dictionary endpoints
  const response = await axios.get(endPoints.thoughts.getThoughts, config)

  return response;
};

const addThoughtRequest = async (thought) => {

  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    },
  };

  // request axios dictionary endpoints
  const response = await axios.post(endPoints.thoughts.addThought, thought, config)

  return response.data;
};

const getThoughtRequest = async (thoughtId) => {
  // request axios dictionary endpoints
  const response = await axios.get(endPoints.thoughts.getThought(thoughtId))

  return response;
};

const deleteThoughtRequest = async (thoughtId) => {
  // request axios endpoints diccionary
  const response = await axios.delete(endPoints.thoughts.deleteThought(thoughtId));

  return response
}

const updateThoughtRequest = async (thoughtId, changes) => {
  // request axios endpoints diccionary
  const response = await axios.patch(endPoints.thoughts.updateThought(thoughtId), changes);

  return response.data.body;
}

export { addThoughtRequest, getThoughtRequest, getThoughtsRequest, deleteThoughtRequest, updateThoughtRequest };
