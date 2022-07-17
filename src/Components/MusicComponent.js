import React from 'react'

export default function MusicComponent({name,description,pic,handleClick,id}) {
  return (
    <div onClick={() => handleClick(id)} style={{background : pic}} className='components'>
      <div >
        <img className='components-pic' src={pic}/>
      </div>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  )
}
