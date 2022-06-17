import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 group'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-[#b60b0b]'>Contact</p>
                <p className='text-gray-300'>Submit the form below to contact me, or if you prefer you can email me <a href='mailto:paul.r.gottinger@gmail.com' className=' underline underline-offset-2 hover:text-[#b60b0b]] group-hover:text-[#b60b0b]' >directly.</a></p>
            </div>
        </form>
        </div>
  )
}

export default Contact