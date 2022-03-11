import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import jsPDF from 'jspdf';

function App() {
  const [href, setHref] = useState<any>();
  const pdf = new jsPDF('p', 'pt', 'a4');;
  pdf.setFontSize(18);

  let blobUrl: any = '';
  let margins = {
    top: 10,
    left: 30,
    width: 550
  };

  useEffect(()=> {
    const doc = document.getElementById('test');
    pdf.html(doc!.innerHTML, {
      margin: [margins.top, margins.left],
      width: margins.width,
      callback: function (pdf) {
        blobUrl = pdf.output('bloburl')
        setHref(blobUrl);
      }
    });
  }, [blobUrl])

  return (
    <div className="App">
        <div id="test" style={{display: 'none'}}>
          <h1 style={{width: '100%', display: 'block', color: 'green'}}>Dit is een test</h1>
          <p>Hier alle informatie voor de pdf</p>
        </div>

      { href === '' ? <div>Laden...</div> : <iframe src={href} height={window.innerHeight - 300} width={window.innerWidth - 300}></iframe>}
    </div>
  )
}

export default App
