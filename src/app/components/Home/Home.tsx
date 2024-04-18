import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import './Home.css'

function Home() {
 

  return (
    <div>
      <Banner />
      {/* lg:w-1/2 mt-5 md:w-full sm:w-full */}
      <div className='flex flex-col md:flex-row sm:flex-row w-4/5 m-auto gap-5'>
        <div>
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png" alt="" />
          <div className='text-white lg:text-left md:text-center sm:text-center'>
            <h1 className='text-xl font-bold '>Personalized Training:</h1>

            <li>All Workout Exercises</li>
            <li>Proper form</li>
            <li>At-home live workouts</li>

          </div>
        </div>
        <div className='text-white'>
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png" alt="" />
          <div className='text-white lg:text-left md:text-center sm:text-center'>
            <h1 className='text-xl font-bold'>Progress Tracking and Motivation:</h1>
            <li>Track Your Every Rep</li>
            <li>Visualize Your Success</li>
            <li>Personalized Progress Insights</li>
          </div>
        </div>
        <div className='text-white'>
          <div  >
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png" alt="" />
            {/* <h2 className='sticky'>FitZone Pro</h2> */}
          </div>
          <div className='text-white lg:text-left md:text-center sm:text-center'>
            <h1 className='text-xl font-bold'>Engaging Features</h1>
            
            <li>Massive Workout Library</li>
            <li>Nutrimeter</li>
            <li>Goal-based Workouts and Meditation Sesssions</li>

          </div>
        </div>
       

      </div>
     
    </div>
  )
}

export default Home