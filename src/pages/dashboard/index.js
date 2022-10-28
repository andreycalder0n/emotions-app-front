import { useState } from 'react';
import { useRouter } from 'next/router';

import { useThoughts } from '@context/ProviderThought'
import Modal from '@common/Modal';
import { PlusIcon } from '@heroicons/react/solid';
import FormThought from '@components/FormThought';
import MainLayout from '@layout/MainLayout.js';

import { Chart } from '@common/Chart'
import { useEffect } from 'react';

export default function Dashboard() {
  const router = useRouter();

  // modal form thought
  const [open, setOpen] = useState(false);
  const titleModal = 'Thought'

  const [titleGraphic, setTitleGraphic] = useState('Todas las emociones')

  // thoughts
  const { thoughts, getThoughts, setThoughts } = useThoughts();

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

  // onload page
  useEffect(() => {
    setThoughtsFilter(thoughts)
  }, [])


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

  // Cuenta concurrencia de un arreglo
  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})

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
  const selectInputMonth = () => {
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

  return (
    <>
      <MainLayout>

        <div className="flex items-center justify-between m-3">

          <div className="flex-1 min-w-0">
            <h2 className="text-2xl leading-7 text-gray-900 text-semibold sm:text-2xl sm:truncate">Vivir con propósito</h2>
            <h3>{thoughtsFilter.length}</h3>
          </div>

          <div className="flex justify-between">

            {selectInputMonth()}

          </div>

        </div>

        <Chart chartData={data} />

        {/* thought form */}
        <Modal open={open} setOpen={setOpen} title={titleModal}>
          <FormThought setOpen={setOpen}></FormThought>
        </Modal>

      </MainLayout>

    </>
  );
};
