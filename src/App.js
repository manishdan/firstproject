import './App.css';
import City from "./Component/City"

function App() {
  return (
    <div className="App">
      <City city="london" feature="beautiful"/>
      <City city="New york" feature="fantastic"/>
      <City city="Kathmandu" feature="majestic"/>
      <City city="beijing" feature="fmarvelous"/>
      {/* <p>hello , I am in london city . it is beautiful</p>
      <p>hello , I am in  . it is fantastic</p>
      <p>hello , I am in Kathmandu . it is majestic</p>
      <p>hello , I am in beijing  . it is marvelous</p> */}
    </div>
  );
}

export default App;
