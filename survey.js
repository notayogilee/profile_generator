const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// answersToQuestions = [];

rl.question('What is your name? Nicknames are also acceptable :) ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('what do you listen to while doing that? ', (answer3) => {
      rl.question('What meal is your favorite? ', (answer4) => {
        rl.question('What\'s your favorite thing to eat for that meal? ', (answer5) => {
          rl.question('What sport is your absolute favorite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {




              console.log(`${answer1} likes to ${answer2} while ${answer3}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport and is amazing at ${answer7}`);

              rl.close();
            })
          })
        })
      })
    })
  })
});