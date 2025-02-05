import React, { useState } from 'react'
import DatePicker from 'react-date-picker';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


function Page() {
  const [dataChegada, setDataChegada] = useState<Value>(new Date());

  return (
    <div className='flex items-center justify-center'>
      <div className='w-3/5 h-full flex justify-center items-center'>
        <div className='flex flex-col w-3/5'>
          <span className='text-5xl font-bold text-center mt-10'>Escolha sua proxima parada</span>
          <DatePicker
            onChange={setDataChegada}
            value={dataChegada}
          />
        </div>
      </div>
    </div>
  )
}

export default Page;