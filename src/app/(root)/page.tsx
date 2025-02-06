import React from 'react'
import DatePickerComponent from '../components/DatePicker/DatePickerComponent';

function Page() {

  return (
    <div className='flex items-center justify-center'>
      <div className='w-3/5 h-full flex justify-center items-center'>
        <div className='flex flex-col w-3/5'>
          <span className='text-5xl font-bold text-center mt-10'>Escolha sua proxima parada</span>
          <DatePickerComponent/>
        </div>
      </div>
    </div>
  )
}

export default Page;