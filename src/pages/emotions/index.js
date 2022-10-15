// import Image from 'next/image';
// import useFetch from '@hooks/useFetch.js';
// import endPoints from '@services/api';
// import authenticatedRoute from '@components/AuthenticatesRoute'

import { useAuth } from '@hooks/useAuth';
import endPoints from '@services/api/endPoints';
import axios from 'axios';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Emotions() {
  // const router = useRouter()
  const { user } = useAuth()

  // emotions
  const [emotions, setEmotions] = useState([])

  if (!user) {
    // router.push('/')
  }

  // get emociones
  async function getEmotions() {
    const response = await axios.get(endPoints.emotions.getEmotions)

    setEmotions(response.data)
  }

  try {
    useEffect(() => {
      getEmotions();
    }, [])
  } catch (error) {
    console.log('Error in emotions');
    // console.log(error);
    throw error;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1>Ruta inicial donde se mostraran todas la emociones</h1>

        {
          emotions.map((emotion) => {
            return (
              <div key={`emotion-${emotion.emotionId}`}>
                <h1  >{emotion.emotion}</h1>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Emotions;
