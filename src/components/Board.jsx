import { useState } from 'react'

import { answers } from '../helpers/respuestas';
import Answer from './Answer';

const iniState = answers[Math.floor(Math.random() * answers.length )];

const Board = () => {

  const [preguntas, setPreguntas] = useState( iniState )

  const cambiaPregunta = () => {
    const azar = Math.floor(Math.random() * answers.length )
    setPreguntas(answers[azar])
  }

  return (
    <div className="board">
      <p className="pregunta" onClick={cambiaPregunta} > {preguntas.pregunta}</p>
      {preguntas.respuestas.map( (resp, index) => <Answer key={index} respuesta={resp} />)}
    </div>
  );
};

export default Board;