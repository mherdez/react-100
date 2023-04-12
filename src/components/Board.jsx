import { useState } from 'react';

import { answers } from '../helpers/respuestas';
import Answer from './Answer';

const iniState = answers[Math.floor(Math.random() * answers.length)];

const Board = () => {

  const [preguntas, setPreguntas] = useState(iniState);

  const cambiaPregunta = () => {
    const azar = Math.floor(Math.random() * answers.length);
    setPreguntas(answers[azar]);
  };

  const showMe = (id) => {
    const arr = {...preguntas}
    const cambia = arr.respuestas.find( res => res.id === id)
    cambia.show = !cambia.show;
    setPreguntas({...arr})
  }

  return (
    <div className="board">
      <p className="pregunta" onClick={cambiaPregunta} > {preguntas.pregunta}</p>
      {preguntas.respuestas.map( (resp, index) => <Answer key={index} respuesta={resp} showMe={showMe} />)}
    </div>
  );
};

export default Board;