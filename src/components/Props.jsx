import React from "react"

import { getImageUrl } from "./utils"


function Avatar({person,size}){
    return(
        <img 
        className="avater"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}                     
        />
    )
}


export default function Profile(){

    return(
        <div>
    <Avatar
    
    size ={100}
    person={{ name:'Katsuko Saruhashi' , imageId: 'YfeOqp2'}}
    />
    
    <Avatar
    size={80}
    person={{
      name: 'Aklilu Lemma', 
      imageId: 'OKS67lh'
    }}/>

<Avatar
    size={50}
    person={{
      name: 'Lin Lanying1bX5QH6', 
      imageId: '1bX5QH6'
    }}/>

</div>
    )
}










