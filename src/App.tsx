import { useState,useEffect } from 'react';
import './App.css'

export default function App() {
  const[images,setImages]=useState<string[]>([]);
  const[img,setImg]=useState('');
  useEffect(()=>{
   let imgs=['https://i.pinimg.com/originals/f5/f1/eb/f5f1eb3aaf565d801c1599674fc2a750.jpg',
      'https://i.pinimg.com/originals/26/29/ce/2629ceb7a44a6384849c0aeb0d01566a.jpg',
      'https://i.pinimg.com/originals/03/c1/c7/03c1c7709a4a8c1f343a0025eab3c813.jpg',
      'https://i.pinimg.com/originals/58/2a/5b/582a5bd1176449f5e3cbc98ad1553960.jpg'
  ]
  setImages(imgs);
  },[]);
  const[count,setCount]=useState(0);
  useEffect(()=>{
    if(count%2==0)
    {
      let rnd= Math.round(Math.random()*(images.length-0)+0) //---> נוסחה של רנדום
      setImg(images[rnd]);
    }
  },[count])
  

  return (
    <>
    <img src={img}/>
    <button onClick={()=>setCount(count+1)} >Moooooo</button>
    </>
  )
}

 
