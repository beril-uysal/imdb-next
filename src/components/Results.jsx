import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {
            results.map((result) => (
                <div key={result.id}>
                    <h2>{result.title || result.name}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title || result.name}/>
                </div>
            ))
        }
    </div>
  )
}
