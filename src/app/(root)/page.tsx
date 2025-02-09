import React from 'react'
import SearchBarComponent from '../components/searchBar/SearchBarComponent';
import ListingCard from '../components/listingCard/ListingCard';

function Page() {

  return (
    <div className='flex items-center justify-center'>
      <div className='w-3/5 h-full flex justify-center items-center'>
        <div className='flex flex-col'>
          <span className='text-5xl font-bold text-center mt-10'>Escolha sua proxima parada</span>
          <SearchBarComponent className='mt-2 mb-2'/>
          <ListingCard></ListingCard>
        </div>
      </div>
    </div>
  )
}

export default Page;