import React from 'react'

const HeroContainer = () => {
    // const url="bg-[url('https://images.unsplash.com/photo-1699571560730-59aa01702dff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D')]";
  return (
    <React.Fragment>
        <div className="w-full h-screen bg-green-200 flex justify-start items-center px-4 bg-gradient-to-r from-cyan-200 to-green-400">
            <div className='w-1/2'>
                <h5 className='text-md font-semibold mb-8'>MERN Developers IBA</h5>
                <h2 className='text-3xl font-bold mb-5 text-blue-700'>
                Collaborate us to Enhance Productivity in Js Code
                </h2>
                <p className='text-lg font-bold mb-4'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo voluptatem quam eos accusamus unde atque sint cum eligendi facilis iure ex voluptate temporibus molestiae, saepe consequuntur beatae nemo repellat odit.
                </p>
                <button className='bg-orange-500 border hover:bg-blue-700 rounded-md text-lg py-1 px-5 shadow-xl outline-none text-white'>Hire Us</button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default HeroContainer
