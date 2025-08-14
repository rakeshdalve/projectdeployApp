import React from 'react'

export default function About() {
  return (
    <>
      <div className='h-screen'>
        <div className='h-2/5 w-full bg-slate-900 text-white flex flex-col md:flex-row'>
          <div className='md:w-3/5 flex flex-col justify-center items-center p-5'>
              <h1 className='text-3xl m-1'>About Us</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Ex quas iste amet atque, neque explicabo dicta! Repellat, 
                 ducimus velit rerum a, quo ex ut odio error tempora provident recusandae cumque.</p>
          </div>
          <div className='bg-lime-700 md:w-2/5 overflow-hidden m-5'>
              <img src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8fDA%3D" alt="" 
              className='w-full h-full' />
          </div>
        </div>

        <div className='bg-orange-300 md:h-3/5 w-full text-white flex flex-col md:flex-row justify-evenly'>
          <div className='bg-lime-700 md:w-2/5 overflow-hidden m-5'>
              <img src="https://media.istockphoto.com/id/1404294992/photo/generic-small-office-buildings-enterprise.jpg?s=612x612&w=0&k=20&c=i3DS7naGl13R9YOYdf-mwXiUjcd_lin48ttHpBHui-4=" alt="" 
              className='h-full w-full'/>
          </div>
          <div className='m-5 md:w-2/5 flex flex-col md:justify-center'>
                <h1 className='text-3xl'>
                  Our Mission: Helping Millions of Organization Grow Better
                </h1>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum officiis vel quis hic, dolorem sed sunt qui sint. Ut in consequuntur quos quis a, animi optio recusandae ullam iure doloremque.</p>
          </div>
        </div>
      </div>
    </> 
  )
}
