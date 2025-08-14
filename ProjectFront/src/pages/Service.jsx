import React from 'react'
import { FcMindMap } from "react-icons/fc";
import { TbSpeakerphone } from "react-icons/tb";
import { TbFolderCode } from "react-icons/tb";
import { IoColorPalette } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { PiFoldersBold } from "react-icons/pi";

export default function Service() {
  return (
    <>
      <div className='m-5'>
        <h1 className='flex justify-center text-2xl font-bold'>Our Service</h1>
        <p className='flex justify-center m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi quas pariatur</p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"> 

              <div className="bg-white flex flex-col items-center justify-center rounded-lg shadow-2xl overflow-hidden">
                 <div className='bg-slate-600 m-1 h-20 w-20 flex justify-center items-center rounded-full'>
                   <FcMindMap size={50}/>
                 </div>

                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-bold mb-2 ">Strategy</h3>
                  <p className="text-gray-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. odio sequi dolor quas qui ullam obcaecati itaque, ipsum, consequuntur vero velit porro sint vel recusandae, quasi consectetur culpa eveniet. Esse.</p>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center justify-center rounded-lg shadow-2xl overflow-hidden">
                 <div className='bg-slate-600 m-1 h-20 w-20 flex justify-center items-center rounded-full'>
                   <TbSpeakerphone size={50}/>
                 </div>

                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-bold mb-2 ">Branding</h3>
                  <p className="text-gray-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. odio sequi dolor quas qui ullam obcaecati itaque, ipsum, consequuntur vero velit porro sint vel recusandae, quasi consectetur culpa eveniet. Esse.</p>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center justify-center rounded-lg shadow-2xl overflow-hidden">
                 <div className='bg-slate-600 m-1 h-20 w-20 flex justify-center items-center rounded-full'>
                   <TbFolderCode size={50}/>
                 </div>

                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-bold mb-2 ">Development</h3>
                  <p className="text-gray-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. odio sequi dolor quas qui ullam obcaecati itaque, ipsum, consequuntur vero velit porro sint vel recusandae, quasi consectetur culpa eveniet. Esse.</p>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center justify-center rounded-lg shadow-2xl overflow-hidden">
                 <div className='bg-slate-600 m-1 h-20 w-20 flex justify-center items-center rounded-full'>
                   <IoColorPalette size={50}/>
                 </div>

                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-bold mb-2 ">Web Design</h3>
                  <p className="text-gray-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. odio sequi dolor quas qui ullam obcaecati itaque, ipsum, consequuntur vero velit porro sint vel recusandae, quasi consectetur culpa eveniet. Esse.</p>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center justify-center rounded-lg shadow-2xl overflow-hidden">
                 <div className='bg-slate-600 m-1 h-20 w-20 flex justify-center items-center rounded-full'>
                   <IoShareSocialSharp size={50}/>
                 </div>

                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-bold mb-2 ">Social Media</h3>
                  <p className="text-gray-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. odio sequi dolor quas qui ullam obcaecati itaque, ipsum, consequuntur vero velit porro sint vel recusandae, quasi consectetur culpa eveniet. Esse.</p>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center justify-center rounded-lg shadow-2xl overflow-hidden">
                 <div className='bg-slate-600 m-1 h-20 w-20 flex justify-center items-center rounded-full'>
                   <PiFoldersBold size={50}/>
                 </div>

                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-bold mb-2 ">Ecommerce</h3>
                  <p className="text-gray-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. odio sequi dolor quas qui ullam obcaecati itaque, ipsum, consequuntur vero velit porro sint vel recusandae, quasi consectetur culpa eveniet. Esse.</p>
                </div>
              </div>

            
          </div>
        </div>
      </div>
    </>
  )
}
