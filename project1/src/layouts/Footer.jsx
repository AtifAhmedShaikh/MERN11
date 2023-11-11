import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
          <div className='w-full h-60 bg-gray-900 flex flex-wrap justify-center py-4'>
            <div className='flex flex-col justify-start align-middle w-1/3 items-center text-white'>
              <h4 className='mb-4 text-xl'>Team</h4>
              <ul className='list-none text-sm underline flex flex-col gap-2'>
                <li>ABC XYZ 95</li>
                <li>ABC XYZ 95</li>
                <li>ABC XYZ 95</li>
              </ul>
            </div>
            <div className='flex flex-col justify-start align-middle w-1/3 items-center text-white'>
              <h4 className='mb-4 text-xl'>Technologies</h4>

              <ul className='list-none text-sm underline flex flex-col gap-2'>
                <li>Javascript</li>
                <li>React</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Redux and reduxToolkit</li>
              </ul>
            </div>
            <div className='flex flex-col justify-start align-middle w-1/3 items-center text-white'>
              <h4 className='mb-4 text-xl'>Projects</h4>
              <ul className='list-none text-sm underline flex flex-col gap-2'>
                <li>Spotify Clone</li>
                <li>Twitter Clone</li>
                <li>E-Commerce App</li>
              </ul>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Footer
