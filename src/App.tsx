import { useEffect, useState } from "react";
import { shuffle } from 'lodash'

type Person =
  | "Rob"
  | "Adelle"
  | "Karaline"
  | "Nick"
  | "Kristina"
  | "Steven"
  | "Mark";

type Pair = [Person, Person];

const people: Person[] = [
  "Rob",
  "Adelle",
  "Karaline",
  "Nick",
  "Kristina",
  "Steven",
  "Mark"
];

const invalidPairs: Array<Pair> = [
  /* Spouses */
  ["Rob", "Adelle"],
  ["Karaline", "Nick"],
  ["Steven", "Kristina"],
  /* Last year [Giver, Receiver] */
  ["Rob", "Karaline"],
  ["Karaline", "Adelle"],
  ["Nick", "Steven"],
  ["Steven", "Mark"],
  ["Kristina", "Rob"],
  ["Adelle", "Nick"],
  ["Mark", "Kristina"]
];

function generateMatches(): Array<Pair> {
  const remainingReceivers: Person[] = shuffle(Array.from(people));
  let matches: Array<Pair> = [];
  let receiver: Person;
  people.forEach(giver => {
    for (let i = 0; i < remainingReceivers.length; i++) {
      const candidate = remainingReceivers[i];
      if (
        !invalidPairs.some(
          (invalidPair) =>
            invalidPair.includes(giver) && invalidPair.includes(candidate)
        )
        && giver !== candidate
      ) {
        [receiver] = remainingReceivers.splice(remainingReceivers.indexOf(candidate), 1);
        const match: Pair = [giver, receiver];
        matches.push(match);
        break;
      }
    }
  });
  if (matches.length !== people.length) return generateMatches()
  return matches;
}

export default function App() {
  const [matches, setMatches] = useState<Array<Pair>>([]);
  useEffect(() => {
    if (!matches || matches.length === 0) setMatches(generateMatches());
  }, [matches]);
  if (
    !matches
    || matches.length === 0 
    || matches.length !== people.length
  ) return <div>'Loading...'</div>
  return (
    <div>
      <h1>Secret Santa</h1>
      <ul>
        {matches.map((pair) => (
          <li key={`${pair[0]} - ${pair[1]}`}>
            <b>{pair[0]}</b> gives to <b>{pair[1]}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
