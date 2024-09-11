// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect, useState } from 'react'
export default function ImageRenderComponent() {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then(x => x.json())
        .then((x) => {
          setData(x);
        })
    }, [])


  return (
    <div className='container'>
      <div >
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '500px', height: '300px' }} />
            <h3>{item.name}</h3>
            <p>{item.info}</p>

          </div>
        ))}
      </div>
    </div>
  )
}
