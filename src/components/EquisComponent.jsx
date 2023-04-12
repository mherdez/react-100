const EquisComponent = ( {x, handleClick}) => {

  const { id, estado } = x;

  const toggleX = () => {
    handleClick(id)
  }

  return (
    <div onClick={toggleX} className="equis"> {estado ? 'x' : null} </div>
  );
};

export default EquisComponent;