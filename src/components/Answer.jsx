import { useState } from 'react';

const Answer = ( {respuesta} ) => {


  const [ showAnswer, setShowAnswer ] = useState(false)
  const { answer, points } = respuesta;

  const toggleShow = () => {
    setShowAnswer( !showAnswer );
  }

  return (
    <div onClick={ toggleShow } className="answer">
      <div id='answer1' className="answer-text">
        { showAnswer ? answer : null }
      </div>
      <div id="points1" className={ showAnswer ? 'answer-points' : '' }>
        { showAnswer ? points : null }
      </div>
    </div>
  );
};

export default Answer;