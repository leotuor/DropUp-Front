"use client"
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './datePickerComponent.css';

const DatePicker = dynamic(() => import("react-date-picker"), { ssr: false });

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function DatePickerComponent() {
  const [dataChegada, setDataChegada] = useState<Value>(null);
  const [dataSaida, setDataSaida] = useState<Value>(null);

  useEffect(() => {
    setDataChegada(new Date());
  }, []);

  useEffect(() => {
    setDataSaida(new Date());
  }, []);

  return (
    <div>
      <div className="bg-white px-2 rounded-md shadow-[rgba(0,0,15,0.5)_0px_0px_10px_5px] shadow-slate-300">
        <DatePicker
          onChange={setDataChegada}
          value={dataChegada}
          className="border-r border-gray-300 p-1 rounded z-10"
        />
        <DatePicker
          onChange={setDataSaida}
          value={dataSaida}
          className="border-l border-l-gray-300 p-1 rounded z-10"
        />
      </div>
    </div>
  )
}



export default DatePickerComponent;