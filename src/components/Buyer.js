import { useState, useEffect } from "react";
import React from 'react'

export default function Buyer() {

  const[buyers, setBuyers] = useState([])
 console.log(buyers)

  const customers=buyers.map(cus=>{
    return(
      <tr className="p-2 border-2">
      <td className="p-2 border-2">{cus.name.toUpperCase()}</td>
      <td className="p-2 border-2">{cus.gender.toUpperCase()}</td>
      <td className="p-2 border-2">{cus.contact.toUpperCase()}</td>
    </tr>
    )
  })


  useEffect( () => {
    fetch("https://fashion-and-design-backend.herokuapp.com/buyers")
    .then(res => res.json())
    .then(rosemary => setBuyers(rosemary))
  },[])
  return (
    <div>
    <table>
  <tr>
    <th className="p-2 border-2">Name</th>
    <th className="p-2 border-2">Gender</th>
    <th className="p-2 border-2">Contacts</th>
  </tr>
  {customers}


</table>
    </div>
  )
}
