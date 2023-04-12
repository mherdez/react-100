
import Board from './Board';
import Equis from './Equis';
import ScoreGame from './ScoreGame';
import Team1 from './Team1';
import Team2 from './Team2';


const MainScreen = () => {

   return (
    <>
      <Team1 />
      <div className="main">
        <ScoreGame />
        <Board />
        <Equis />
      </div>
      <Team2 />
    </>
  );
};

export default MainScreen;