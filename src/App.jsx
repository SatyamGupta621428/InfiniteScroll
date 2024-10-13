import { useState,  useEffect } from 'react'
import Card from './Card';

function App() {
  const[data, setData] = useState([]);
  const[page, setPage] = useState(1);//page no 1 by default
  const API_URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`
  //call the api everytime the page number gets changed
  useEffect(()=>{
    async function callAPI(){
      const res = await fetch(API_URL);
      const data  = await res.json();
      setData(prevData=>[...prevData, ...data]);
    }
    callAPI()
  },[page])
  //logic for handling infinite scroll
  useEffect(()=>{
      const handleScroll = ()=>{
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight)
          {
              setPage(prev=>prev+1)
          }
      }
      window.addEventListener('scroll',handleScroll)
      return ()=>window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
     <Card data = {data}></Card>
    </>
  )
}

export default App
