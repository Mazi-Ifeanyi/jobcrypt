import './App.css';
import { useState, useLayoutEffect } from 'react';
import Layout from './components/Layout';



const useWindowSize = ()=>{
  const [ width, setWidth ] = useState(0);

  useLayoutEffect(()=>{
    function updateWidth(){
      setWidth(window.innerWidth);
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return()=>{
      window.removeEventListener('resize', updateWidth);
    }
  },[]);

  return width;
}


function App() {
  const width = useWindowSize();
 console.log(width);


  return (
    <>
        <Layout width={width} />
    </>
  );
}

export default App;
