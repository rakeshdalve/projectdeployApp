import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoHome } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <div name="Contact" className="p-4 
            bg-[url('https://media.licdn.com/dms/image/v2/C4E12AQGJ8JGKe7piqw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520237357551?e=2147483647&v=beta&t=bjzXtL1AlzLwcjckX8yPlw93s_wZftNfG43hBjkBk4s')] 
            bg-cover bg-center h-screen md:h-140 w-full">
        <h1 className='text-3xl font-bold mb-5 flex justify-center'>
          Contact us
        </h1>
        <span className='font-bold flex justify-center'>Please fill the form below to contact</span>
        <div className='flex flex-col m-2 mt-20 md:flex-row space-x-5 justify-around'>
          {/* second div */}
          <div className='space-y-5 mt-5'>
            <div className='flex'>
              <IoHome size={40} className='bg-white p-2 m-2 rounded-full' />
              <div>
                <h1 className='text-xl text-blue-500 font-bold'>Address</h1>
                <p>b 64 local street khajrana Indore (M.P)</p>
              </div>
            </div>
            <div className='flex'>
              <MdCall size={40} className='bg-white p-2 m-2 rounded-full' />
              <div>
                <h1 className='text-xl text-blue-500 font-bold'>Phone</h1>
                <p>9630115305</p>
              </div>
            </div>
            <div className='flex'>
              <MdEmail size={40} className='bg-white p-2 m-2 rounded-full' />
              <div>
                <h1 className='text-xl text-blue-500 font-bold'>Email</h1>
                <p>rakesh@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='bg-gray-300 max-w-md md:w-full px-8 py-6 rounded-2xl'>
            <form action="">
              <h1 className='font-bold text-2xl p-5'>Contact</h1>
              <div className='flex flex-col mb-2'>
                <label className='block text-gray-700 font-bold'>Full Name</label>
                <input type="text"
                  className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id="name"
                  placeholder='Name' />
              </div>
              <div className='flex flex-col mb-2'>
                <label className='block text-gray-700 font-bold'>Email</label>
                <input type="email"
                  className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id="name"
                  placeholder='Email' />
              </div>
              <div className='flex flex-col mb-2'>
                <label className='block text-gray-700 font-bold'>Message</label>
                <textarea type="text"
                  className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id="name"
                  placeholder='Enter Message Here' />
              </div>
              <button className='bg-black text-white px-3 py-2 rounded-2xl hover:bg-slate-500 duration-200'>Send</button>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}
