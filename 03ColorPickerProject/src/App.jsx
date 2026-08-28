import { useState } from 'react'


function App() {
  const [color, setColor] = useState("#1e90ff")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="inline-flex items-center gap-2 bg-linear-to-r from-slate-800 to-slate-700 text-white px-4 py-2 rounded-full shadow-lg my-2.5">
        <span
          className="w-4 h-4 rounded-full border-2 border-white/50"
          style={{ backgroundColor: color }}
        />
        <span className="font-mono text-sm">{color}</span>
      </div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-linear-to-r from-slate-800 to-slate-700 px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("#1e90ff")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#1e90ff" }}>Clear Chill</button>
          <button onClick={() => setColor("#FEA47F")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#FEA47F" }}>Orchid Orange</button>
          <button onClick={() => setColor("#EAB543")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#EAB543" }}>Honey Glow</button>
          <button onClick={() => setColor("#2ed573")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#2ed573" }}>UFO Green</button>
          <button onClick={() => setColor("#a4b0be")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#a4b0be" }}>Peace</button>
          <button onClick={() => setColor("#ff4d4d")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#ff4d4d" }}>Light Red</button>
          <button onClick={() => setColor("#7158e2")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#7158e2" }}>Indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App
