const Answer = ( {respuesta, showMe } ) => {

  const { answer, points, show, id } = respuesta;

  const toggleShow = () => showMe(id);

  return (
    <div onClick={ toggleShow } className="answer">
      <div id='answer1' className="answer-text">
        { show ? answer : null }
      </div>
      <div id="points1" className={ show ? 'answer-points' : '' }>
        { show ? points : null }
      </div>
    </div>
  );
};

export default Answer;