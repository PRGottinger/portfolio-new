import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='post' action='https://getform.io/f/5b471508-d1b4-477e-8aa3-70cb76a87e50' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 group'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-[#b60b0b]'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to contact me, or if you prefer you can email me <a href='mailto:paul.r.gottinger@gmail.com' className=' underline underline-offset-2 hover:text-[#b60b0b]] group-hover:text-[#b60b0b]' >directly.</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#b60b0b] hover:border-[#b60b0b] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
        </div>
  )
}

export default Contact