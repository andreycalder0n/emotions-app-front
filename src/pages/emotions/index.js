// import Image from 'next/image';
// import useFetch from '@hooks/useFetch.js';
// import endPoints from '@services/api';
// import authenticatedRoute from '@components/AuthenticatesRoute'

import { useEffect, useState } from 'react';
import axios from 'axios';

import { useAuth } from '@hooks/useAuth';
import endPoints from '@services/api/endPoints';
// import { useRouter } from 'next/router';
import MainLayout from '@layout/MainLayout.js';

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

  useEffect(() => {
    getEmotions();
  }, [])

  return (
    <>
      <MainLayout>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1>Ruta inicial donde se mostraran todas la emociones</h1>

          {
            emotions.map((emotion) => {
              return (
                <div key={`emotion-${emotion.emotionId}`}>
                  <h1  >{emotion.name}</h1>
                </div>
              )
            })
          }
        </div>
      </MainLayout>
    </>
  );
}

export default Emotions;
