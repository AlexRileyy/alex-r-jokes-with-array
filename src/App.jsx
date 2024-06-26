import { Joke, Liner } from "./joke";
import jokesData from "./jokesData";
import oneLinersData from "./oneLiners";

export default function App() {
  const dadJokes = jokesData.map((joke, index) => (
    <li key={index}>
      <Joke setup={joke.setup} punchline={joke.punchline} />
    </li>
  ));

  const oneLiners = oneLinersData.map((oneLiner, index) => (
    <li key={index}>
      <Liner oneLiner={oneLiner.oneLiner} />
    </li>
  ));
  
  return (
    <div>
      <h1>Some Jokes!</h1>

      <h2>Dad Jokes</h2>
      <ul>{dadJokes}</ul>

      <h2>One Liners</h2>
      <ul>{oneLiners}</ul>
    </div>
  );
}