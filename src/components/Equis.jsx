import { useState } from 'react';
import EquisComponent from './EquisComponent';

const initState = [
  {
    id: 1,
    estado: false
  },
  {
    id: 2,
    estado: false
  },
  {
    id: 3,
    estado: false
  },
];

const Equis = () => {

  const [showX, setShowX] = useState(initState);

  const handleClick = (id) => {
    const arrAux = [...showX];
    const res = arrAux.find(item => item.id === id);
    res.estado = !res.estado;
    setShowX([...arrAux]);
  };

  return (
    <div className="equis-container">
      {showX.map(x => <EquisComponent key={x.id} x={x} handleClick={handleClick} />)}
    </div>
  );
};

export default Equis;