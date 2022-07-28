import axios from 'axios';
import endPoints from '@services/api';

const addThought = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    },
  };
  console.log(body);
  const response = await axios.post(endPoints.thoughts.addThought, body, config);

  return response.data;
};

export { addThought };
