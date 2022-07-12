import React, { useEffect, useState } from 'react'
import { characterApi } from './../api/characterApi'

export const Content = () => {

  const [character, setCharacter] = useState([]);

  const state = {
    isActive: "carousel-item active",
    nActive: "carousel-item"
  }

  const url = 'https://rickandmortyapi.com/api/character';

  const { isActive, nActive } = state;

  useEffect(() => {
    getCharacter();
  }, [])

  const getCharacter = async () => {
    const respuesta = await characterApi.get(url);
    setCharacter(respuesta.data.results);
  }

  return (
    <>
      <div className='d-flex justify-content-center pt-5'>
        <h1 className='main-title' >Some characters</h1>
      </div>
      <div className='container-fluid container-character'>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner d-flex justify-content-start">
            {
              character.map((user, i) => (
                <div key={user.name} active={(i === 0).toString()} className={i === 0 ? isActive : nActive} data-interval='4000'>
                  <div className='d-flex align-items-center w-100 h-100 card-carrusel'>
                    <img className='character-image' src={user.image} alt={user.name} />
                    <div className='d-flex flex-column px-5'>
                      <div className='text-1'>Name: {user.name} </div>
                      <div className='text-2 pt-5'>Status: {user.status} </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}