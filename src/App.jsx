
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import { AppLayout } from './com/layout/AppLayout';
import { Home } from './com/Home';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
  function App() {

  return (
    <div className="">
      <Home></Home>
    </div>
  )
}

export default App
