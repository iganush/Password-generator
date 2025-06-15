// App.jsx
import { useState,useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  let pass = ""
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if(numberAllowed) str += '0123456789';
  if(charAllowed) chars += '!@#$%^&*()_+[]{}|;:,.<>?';

  for (let i = 0; i < length; i++) {
  return (
    <h1 className='text-4xl text-center text-white ' 
    >password generator</h1>
  )
}

export default App
