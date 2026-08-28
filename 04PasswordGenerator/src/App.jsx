import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}~`[]/\|"

    for (let i = 0; i < length; i++) {
      let charInd = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charInd)
      setPassword(pass)
    }


  }, [length, numAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numAllowed, charAllowed, passwordGenerator])

  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-800 text-orange-500'><h2 className='text-white text-center my-3'>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword} className='hover:bg-blue-900 transition-all duration-150 outline-none bg-blue-700 text-white px-3 py-05 shrink-0 '>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={0}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Lenght: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="charInput">Special Character</label>
        </div>
      </div>
        <button onClick={passwordGenerator} className="px-4 py-2 rounded-lg bg-blue-800 text-white text-sm font-medium hover:bg-slate-700 active:scale-95 transition-all duration-150 mt-4">
    Reload
  </button>
    </div>

  )
}

export default App
