import React from "react";
//import First from "./First";
import { useState, useEffect } from "react";
import ndula from './ndula.jpg'
import './Home.css'
//import image from "./-251171501.jpg"


function Home(){
    const[sellers, setSellers] = useState([])
    console.log(sellers)

    const squad=sellers.map(squ=>{
        return(
            <div>
            <h1>Name-{squ.name.toUpperCase()}</h1>
            <p>Good in getting {squ.speciality.toUpperCase()}</p>
            </div>
            
        )
    })
  
    useEffect( () => {
        fetch("https://fashion-and-design-backend.herokuapp.com/sellers")
        .then(res => res.json())
        .then(rosemary => setSellers(rosemary))
      },[])
      
    return(
        <div>
            <section className="">
            <div className="rowcon flex">
            <div className="img">
                    <img className="h-96" src={ndula}/>
                </div>
            <div className="content mt-48 ml-12">
                <span className="text-4xl">FASHION AND DESIGN</span>
                <h2>Kuja uvae nasi</h2>
                <p>Don't hesistate just come and get we are </p>ready to dress you
                <button id="enr"><a href=" " id="enrl">Shop now</a></button>
                <button id="ex"><a href=" " id="exp">we are there</a></button>
            </div>  
                     
        </div>
            </section>
            <section>
                
                <div className="rowcon flex h-1/2">
                <div className="img h-96">
                <img className="h-3/4" src="https://kitengestore.com/wp-content/uploads/2019/07/mens-red-blue-floral-custom-made-african-print-long-sleeve-shirt-model-wearing-front-view-520x694.jpg" alt=" " />
            </div>
            <div className="ml-28">
            <h2 className="text-4xl">Meet MY Sellers</h2>
            {squad}
            </div>
            </div>
            </section>

      
   
</div>
    )
}

export default Home;