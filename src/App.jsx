import { useState } from 'react'


function App() {
  const [color, setColor] = useState('cyan')

  return (
    <>
    <div className=' w-full h-screen duration-200 '
    style={{backgroundColor: color}}
    // already double curly braces are present so no need to add another one to inject html
    >
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        
     <button className=' outline-none px-4 py-1  rounded-full text-white shadow-lg '
     style={{backgroundColor: 'red'}}
     onClick={() => setColor('red')}
     >Red</button>

     <button className=' outline-none px-4 py-1  rounded-full text-black shadow-lg '
     style={{backgroundColor: 'yellow'}}
     onClick={() => setColor('yellow')}
     >Yellow</button>

     <button className=' outline-none px-4 py-1  rounded-full text-white shadow-lg '
     style={{backgroundColor: 'violet'}}
     onClick={() => setColor('violet')}
     >Violet</button>

     <button className=' outline-none px-4 py-1  rounded-full text-white shadow-lg '
     style={{backgroundColor: 'black'}}
     onClick={() => setColor('black')}
     >Black</button>

     <button className=' outline-none px-4 py-1  rounded-full text-white shadow-lg '
     style={{backgroundColor: 'green'}}
     onClick={() => setColor('green')}
     >Green</button>

     </div>
     </div>
    </div>
    
    </>
  )
}

export default App
