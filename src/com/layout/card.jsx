import React from 'react'
import "../../App.css"


const Cards = ({item}) => {

  return (
  <div className="card position-relative " >
    <img src={item.image} alt="" className='rounded-lg' />
            <div className='p-4'>
                <h1 className='font-semibold  mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'> 
                    <button className='bg-danger btn  btn-outline-light  px-3 py-2 rounded-4'><a href={item.live} target='_blank' className='text-white text-decoration-none'>Live Preview</a></button>                   
                    <button className='bg-black mx-4 text-white px-3 py-1 rounded-4'>
                        <a href={item.github} target='_blank' className='flex gap-1 text-white text-decoration-none'>
                        <img src="/image/git3.jpeg" alt="" className=' logo25 rounded-5 ' />
                        Github Link
                        </a>
                        </button>
                </div>
            </div>
  </div>
  )
}

export default Cards
