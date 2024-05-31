import Evaluate from '../components/Evaluate';
import GoodSitter from '../components/GoodSitter';
import Jumbotron from '../components/Jumbotron';
import Matchmaking from '../components/Matchmaking';
import QandA from '../components/QandA';
import Service from '../components/Service';
import ToBe from '../components/ToBe';

const Home = () => {
  return (
    <main>
      <Jumbotron />
      <Service />
      <GoodSitter />
      <Evaluate />
      <Matchmaking />
      <ToBe />
      <QandA />
    </main>
  );
};

export default Home;
