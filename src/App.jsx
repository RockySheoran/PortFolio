
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import { AppLayout } from './com/layout/AppLayout';
import { Home } from './com/Home';
import { pdfjs } from 'react-pdf';
import { Atom } from 'react-loading-indicators';
import { useEffect, useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
  function App() {
    const [ value , SetValue] = useState(false);
console.log(value)
    useEffect(()=>{
     const time  =  setTimeout(()=>{
        SetValue(true);
      },2000);

      return ()=> clearTimeout(time);

    },[])

  return (
    <div className="w-[100vw] overflow-hidden ">
        {value != true ? (
          <div className="h-[100vh]  w-[100vw] flex justify-center items-center">
          <Atom
            color="#32cd32"
            size="large"
            text="Please Wait..."
            textColor="#16e44d"
          />
            </div>
        ) : (
          <Home></Home>
        )}
    
    </div>
  )
}

export default App
