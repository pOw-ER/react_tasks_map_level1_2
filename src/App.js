import './App.css';
import Card from './components/Card';
import movies from './components/Data'
import Wetter from './components/Wetter';

const wetterData = [
  {
    day: 'Mo',
    img: '/img/sun.png',
    wert1: '15°C',
    wert2: '11°C'
  },
  {
    day: 'Di',
    img: '/img/mostly-sunny.png',
    wert1: '22°C',
    wert2: '16°C'
  },
  {
    day: 'Mi',
    img: '/img/cloudy-with-sun.png',
    wert1: '21°C',
    wert2: '12°C'
  },
  {
    day: 'Do',
    img: '/img/cloudy.png',
    wert1: '13°C',
    wert2: '5°C'
  },
  {
    day: 'Fr',
    img: '/img/thunder.png',
    wert1: '11°C',
    wert2: '6°C'
  },
  {
    day: 'Sa',
    img: '/img/sun.png',
    wert1: '14°C',
    wert2: '8°C'
  },
  {
    day: 'So',
    img: '/img/thunder.png',
    wert1: '5°C',
    wert2: '0°C'
  }
]
function App() {
  return (
    <div className="App">
      <section id="wetter">
        {wetterData.map((elt, i) => {
          return <Wetter
            key={i}
            day={elt.day}
            img={elt.img}
            wert1={elt.wert1}
            wert2={elt.wert2}
          />
        })}
      </section>
      <section id="movies">
        {movies.map((movie, i) => {
          return <Card
            key={i}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            duration={movie.duration}
            genre={movie.genre}
            rate={movie.rate}
          />
        })}
      </section>
    </div>
  );
}

export default App;
