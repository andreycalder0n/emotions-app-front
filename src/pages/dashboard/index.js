import { useState } from 'react';
import { useRouter } from 'next/router';

import { useThoughts } from '@context/ProviderThought'
import Modal from '@common/Modal';
import { PlusIcon } from '@heroicons/react/solid';
import FormThought from '@components/FormThought';
import MainLayout from '@layout/MainLayout.js';
import CardThought from '@components/CardThought';

import { Chart } from '@common/Chart'
import { useEffect } from 'react';

export default function Dashboard() {

  const [titleGraphic, setTitleGraphic] = useState('Todas las emociones')

  // thoughts
  const { thoughts } = useThoughts();

  // thoughtsFilter
  const [thoughtsFilter, setThoughtsFilter] = useState([])

  const months = [
    {
      id: 0,
      name: "Enero"
    }, {
      id: 1,
      name: "Febrero"
    },
    {
      id: 2,
      name: "Marzo"
    }
    ,
    {
      id: 3,
      name: "Abril"
    },
    {
      id: 4,
      name: "Mayo"
    },
    {
      id: 5,
      name: "Junio"
    },
    {
      id: 6,
      name: "Julio"
    },
    {
      id: 7,
      name: "Agosto"
    },
    {
      id: 8,
      name: "Septiembre"
    },
    {
      id: 9,
      name: "Octubre"
    },
    {
      id: 10,
      name: "Noviembre"
    },
    {
      id: 11,
      name: "Diciembre"
    }

  ];

  // Cuenta concurrencia de un arreglo
  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})

  // onload page
  useEffect(() => {
    setThoughtsFilter(thoughts)
  }, [])

  const handleEmotion = (emotionName) => {
    if (emotionName === 'Todas') {
      setThoughtsFilter(thoughts)
    }
    else {
      let thoughtsForEmotion = thoughtsFilter.filter(thought => {

        return thought.emotion.emotion === emotionName;
      })

      setThoughtsFilter(thoughtsForEmotion);
    }
  }

  const handleMonth = (monthNumber) => {
    if (monthNumber === 12) {
      setTitleGraphic('Todos')
      setThoughtsFilter(thoughts)
    }
    else {
      setTitleGraphic(months[monthNumber].name)
      let thoughtsForMonth = thoughtsFilter.filter(thought => {

        return thought.month === monthNumber
      })

      setThoughtsFilter(thoughtsForMonth)
    }
  }

  const emotions = thoughtsFilter.map((emotion) => {
    return emotion.emotion
  })

  const emotionsUniqueByKey = [...new Map(emotions.map(item =>
    [item['emotionId'], item])).values()];

  const emotionName = thoughtsFilter.map((thought) => thought.emotion.emotion) // separa emotion

  const data = {
    datasets: [
      {
        label: titleGraphic,
        data: countOcurrences(emotionName),
        borderWidth: 2,
        borderColor: ['rgba(0, 42, 82, 1)', 'rgba(0, 82, 81, 1)', 'rgba(0, 1, 82, 1)'],
        backgroundColor: ['rgba(0, 42, 82, 0.5)', 'rgba(0, 82, 81, 0.5)', 'rgba(0, 1, 82, 0.5)']
      }

    ]
  }

  // component select
  const selectFilterMonth = () => {
    return (
      <div className="w-full">
        <select name='mountName' className="focus:outline-none rounded text-primary w-full border-solid border-2 border-sky-900" onChange={(e) => {
          handleMonth(parseInt(e.target.value))
        }}>
          {
            <option value={12}>Todos</option>
          }
          {
            months.map((month) => (<option value={month.id} key={`month-${month.id}`}>{month.name}</option>))
          }
        </select>
      </div>
    )
  }

  // component select
  const selectFilterEmotion = () => {
    return (
      <div className="w-full">
        <select name='emotionName' className="focus:outline-none rounded text-primary w-full border-solid border-2 border-sky-900" onChange={(e) => {
          handleEmotion(e.target.value)
        }}>
          {
            <option value='Todas'>Todas</option>
          }
          {
            emotionsUniqueByKey.map((emotion) => (<option value={emotion.emotion} key={`emotion-${emotion.emotionId}`} >{emotion.emotion}</option>))
          }
        </select>
      </div>
    )
  }

  return (
    <>
      <MainLayout>

        <div className="flex justify-between items-center p-2">
          <h2 className="flex-auto w-full text-2xl leading-7 text-gray-900 text-semibold sm:text-2xl sm:truncate">Vivir con propósito</h2>
          <h3 className='flex-auto w-1/3'>Thoughts {thoughtsFilter.length}</h3>
        </div>
        <div className="flex items-center justify-between m-3">

          <div className="flex-1 min-w-0">
            <h2 className="text-2xl leading-7 text-gray-900 text-semibold sm:text-2xl sm:truncate">Meses</h2>
          </div>

          <div className="flex justify-between">

            {selectFilterMonth()}

          </div>

        </div>

        <Chart chartData={data} />

        <div className="flex items-center justify-between m-3">

          <div className="flex-1 min-w-0">
            <h2 className="text-2xl leading-7 text-gray-900 text-semibold sm:text-2xl sm:truncate">Emociones</h2>
          </div>

          <div className="flex justify-between">

            {selectFilterEmotion()}

          </div>

        </div>

        <div className='max-w-7xl mx-auto flex flex-col items-center gap-3 px-2'>

          {
            thoughtsFilter?.map((thought) => (
              <CardThought thought={thought} key={`Thought-${thought.thoughtId}`} />
            ))
          }
        </div>
      </MainLayout>

    </>
  );
};
