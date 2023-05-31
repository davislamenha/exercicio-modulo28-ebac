import { useEffect, useState } from 'react';

import Formulario from './Components/Formulario';
import Header from './Components/Header';
import Resultado from './Components/Resultado';

function App() {
  const [imc, setImc] = useState(0);
  const [situacaoIMC, setSituacaoIMC] = useState('');

  useEffect(() => {
    if (imc < 18.5) setSituacaoIMC(', Baixo Peso.');
    else if (imc <= 24.9) setSituacaoIMC(', Peso Normal.');
    else if (imc <= 29.9) setSituacaoIMC(', Excesso de Peso.');
    else if (imc <= 34.9) setSituacaoIMC(', Obesidade.');
    else situacaoIMC(', Obesidade Extrema.');
  }, [imc]);

  function calcularIMC(e) {
    e.preventDefault();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const imc = peso / (altura * altura);
    setImc(imc.toFixed(2));
  }

  return (
    <>
      <Header />
      <Formulario submit={calcularIMC} />
      {imc && situacaoIMC && <Resultado imc={imc} situacaoIMC={situacaoIMC} />}
    </>
  );
}

export default App;
