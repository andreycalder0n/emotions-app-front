import Image from 'next/image';
import useFetch from '@hooks/useFetch.js';
import endPoints from '@services/api';


export default function Emotions() {

  // get emociones
  // const emotions = useFetch(endPoints.emotions.getEmotions());

  return (
    <>
      <h1>Ruta inicial donde se mostraran todas la emociones</h1>

    </>
  );
}
