import React from 'react'

const Bookings = () => {
  return (
    <div id='deals' className=' max-w-[1140px] m-auto w-full p-4 '>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label>Destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option>Palm Beach</option>
                    <option>Maldives</option>
                    <option>Baga Beach</option>
                </select>
            </div>

            <div className='flex w-full'>
                <div className='flex flex-col my-2 w-full py-2 lg:max-w-[250px]'>
                    <label>Check-In</label>
                    <input className=' border rounded-md p-2' type='date'/>
                </div>

                <div className='flex flex-col my-2 w-full py-2 lg:max-w-[250px]'>
                    <label>Check-Out</label>
                    <input className=' border rounded-md p-2'  type='date'/>
                </div>
            </div>

            <div className=' flex flex-col w-full p-2'>
                <label>Search</label>
                <button>Rates and Availabilty</button>
            </div>



        </form>
    </div>
  )
}

export default Bookings