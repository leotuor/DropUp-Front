"use client"
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { People } from '@mui/icons-material';
import { Search } from '@mui/icons-material';

type SearchBarStyleProps = {
  className?: string;
}

function SearchBarComponent( {className}: SearchBarStyleProps ) { 

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={`inline-flex items-center w-auto bg-white pl-2 pr-5 py-5 rounded-md shadow-[rgba(0,0,15,0.5)_0px_0px_10px_5px] shadow-slate-300 ${className}`}>
        <div className='flex items-center'>
          <Button focusRipple className='px-2'>
            <Search />
            <span className='text-gray-400'>Para onde?</span>
          </Button>
        </div>
        <div className='inline-flex border-r border-l space-x-2 items-center'>
          <MobileDatePicker 
            defaultValue={dayjs('2022-04-17')} 
            className='border-r w-[8vw]' 
            slotProps={{
              textField: {
                className: 'ml-2',
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon className="text-gray-500 -ml-4" />
                    </InputAdornment>
                  ),
                },
              }
            }}
          />
          <MobileDatePicker 
            defaultValue={dayjs('2022-04-17')} 
            className='w-[8vw]' 
            slotProps={{
              textField: {
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon className="text-gray-500 -ml-4" />
                    </InputAdornment>
                  ),
                },
              }
            }}
          />      
        </div>
        <div className='flex items-center'>
          <Button className='mr-3 ml-2'>
            <People />
            <span className='text-gray-400 text-sm'>hospedes</span>
          </Button>
          <Button>
            <People />
            <span className='text-gray-400 text-sm'>quartos</span>
          </Button>
        </div>
        <div className='flex items-center ml-2'>
          <Button variant='contained' className='bg-blue-500 text-white'>
            <span>Buscar</span>
          </Button>
        </div>
      </div>
    </LocalizationProvider>
  )
}

export default SearchBarComponent;