import readline from "readline/promises";

const prompt = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(message);

  rl.close();
  return answer;
};

async function simpleSum() {
  const a = await prompt("Enter first number: ");
  const b = await prompt("Enter second number: ");
  console.log("Sum is", Number(a) + Number(b));
}
simpleSum();