import React from "react";
//import First from "./First";
import { useState, useEffect } from "react";
import ndula from './ndula.jpg'
import './Home.css'
//import image from "./-251171501.jpg"


function Home(){
    const[sellers, setSellers] = useState([])
  
    useEffect( () => {
        fetch("https://group-3-backend-app.herokuapp.com/courses")
        .then(res => res.json())
        .then(rosemary => setSellers(rosemary))
      },[])
      
    return(
        <div>
            <section className="">
                
            </section>
            <section>
                <div className="rowcon">
                    <div className="img">
                            <img src={ndula}/>
                        </div>
                    <div className="content">
                        <span>fashion and design</span>
                        <h2>kuja uvae nasi</h2>
                        <p>don't hesistate just come and get we are </p>ready to dress you
                        <button id="enr"><a href=" " id="enrl">Shop now</a></button>
                        <button id="ex"><a href=" " id="exp">we are there</a></button>
                    </div>  
                             
                </div>
                <div className="rowcon">
                <div className="img">
                <img src="https://kitengestore.com/wp-content/uploads/2019/07/mens-red-blue-floral-custom-made-african-print-long-sleeve-shirt-model-wearing-front-view-520x694.jpg" alt=" " />
            </div>
            </div>
            </section>

      
   
</div>
    )
}

export default Home;