import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import jsPDF from 'jspdf';
import Template from './Template';

function App() {
  const [href, setHref] = useState<any>();
  let pdfPX = {
    width: 595,
    height: 842
  }

  const pdf = new jsPDF('p', 'pt', [pdfPX.width, pdfPX.height]);

  let blobUrl: any = '';
  let margins = {
    top: 10,
    left: 30
  };

  useEffect(()=> {
      const doc = document.getElementById('template');
      pdf.html(doc!.innerHTML, {
        x: 0,
        y: 0,
        width: pdfPX.width,
        callback: function (pdf) {
          blobUrl = pdf.output('bloburl')
          setHref(blobUrl);
        }
      });
  }, [blobUrl])

  return (
    <div className="App">
      <Template height={pdfPX.height} width={pdfPX.width}/>

      { href === '' ? <div>Laden...</div> : <iframe src={href} height={window.innerHeight} width={window.innerWidth - 300}></iframe>}
    </div>
  )
}

export default App
