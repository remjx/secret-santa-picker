import { shuffle } from 'lodash'
// import nodemailer from 'nodemailer'
// import dotenv from 'dotenv'

// dotenv.config()

// console.log('password', process.env.GMAIL_APP_PASSWORD)

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   name: "Mark Jackson",
//   auth: {
//     user: 'markjackson02@gmail.com',
//     pass: process.env.GMAIL_APP_PASSWORD
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

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
    people.forEach(giver => {
      let receiver: Person;
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

    // picking randomly does not enforce checks around validity
    if (matches.length !== people.length) return generateMatches()
    return matches;
}

async function start() {
    const matches = generateMatches()
    matches.forEach((pair) => console.log(pair[0], '-->', pair[1]))
    // try {
    //     await transporter.sendMail({
    //         from: 'markjackson02@gmail.com',
    //         to: 'markjackson02@gmail.com',
    //         subject: 'Secret Santa',
    //         text: JSON.stringify(matches)
    //     })
    // } catch (err) {
    //     console.error('err', err)
    // }
}

start();