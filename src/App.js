import React from 'react';
import logo from './assets/images/logo.png';

function App() {
  return (
    <div className={'container'}>
      <img width={119} src={logo} />
      <h1>Bine ai venit pe pagina QRaise!</h1>
      <p>Această pagină este în proces de dezvoltare. Ne cerem scuze pentru incomoditățile create.</p>
      <p>Pentru a ne contacta, nu ezita să ne scrii pe poșta noastră electronică:</p>
      <p><a href="mailto:info@qraise.app">info@qraise.app</a></p>
    </div>
  );
}

export default App;