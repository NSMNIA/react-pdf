import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [href, setHref] = useState<string>('');
  const blob = new Blob(['hello world'], { type: 'text/plain'});

  useEffect(()=> {
    setHref(URL.createObjectURL(blob));
  }, [])

  return (
    <div className="App">
      { href === '' ? <div>Laden...</div> : <a href={href} target="_blank">Download</a>}
    </div>
  )
}

export default App
