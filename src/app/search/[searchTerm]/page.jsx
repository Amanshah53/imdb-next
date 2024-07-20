import Results from '@/app/components/Results';
import React from 'react'

export default async function SearchPage({ params }) {
    const searchTerm = params.searchTerm
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1`)

    const data = await res.json()
    const results = data.results;
  return (
    <div>
      {results.length === 0 ? (<h1 className='text-center pt-6'>No Results Found</h1>) : (<Results results={results}/>)}
    </div>
  )
}
