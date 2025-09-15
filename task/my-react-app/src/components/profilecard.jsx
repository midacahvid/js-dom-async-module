import React from 'react'
import './profilecard.css'

export default function profilecard({ data }) {
  return (
    <div>
        <div class="card">
            <img src={data.image} alt="Profile Picture"></img>
            <h2>{data.name}</h2>
            <p>{data.bio}</p>
        </div>
    </div>
  )
}
