import React from 'react';
import lws from '../../assets/lws.png';
import spring from '../../assets/spring.png';
import pHero from '../../assets/phero.png';
import Footer from '../../screen/shared/Footer';
const Courses = () => {
    return (
        <div  className="lg:w-3/4 mx-auto 2xl:w-2/4 border border-white" >
               <p className="text-start text-gray-900 text-xl lg:text-3xl ml-4 lg:ml-0 font-semibold mt-24 lg:mt-36">Courses</p>
            <section class="timeline-section">
                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2023</div>
                        <div class="timeline-content border-l-2 border-b-2 border-red-500">
                            <h3>Career development program with Spring Rain on MERN Stack</h3>
                            <div className="flex lg:ml-36">
                            <img src={spring} alt="" className="h-12 w-12"/>
                           <p className="text-start mt-4 ml-2">Spring Rain Private Ltd</p>
                           </div>
                            
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date ">2023</div>
                        <div class="timeline-content border-r-2  border-b-2 border-violet-500">
                            <h3 className="text-start">Think in a Redux Way</h3>
                           <div className="flex ">
                            <img src={lws} alt="" className="h-12 w-12"/>
                           <p className="text-start mt-2 ml-2">Learn With Sumit </p>
                           </div>
                            
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2021</div>
                        <div class="timeline-content border-l-2 border-b-2 border-blue-500">
                            <h3>Complete Web Development Course</h3>
                            <div className="flex lg:ml-32">
                            <img src={pHero} alt="" className="h-12 w-20"/>
                           <p className="text-start mt-4 ml-2">Programming Hero </p>
                           </div>
                        </div>
                    </div>
                   
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Courses;