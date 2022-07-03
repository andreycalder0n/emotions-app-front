import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  // declaro la función que hara el fetch
  async function fetchData() {

    const response = await axios.get(url);

    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  return data;
};

export default useFetch;