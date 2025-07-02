for (let i = 0; i <= 100; i++) {
  let number = i
  console.log(number)

  if (number % 3 === 0 && number % 5 === 0) {
    console.log(`FizzBuzz`)
  }

  else if (number % 3 === 0) {
    console.log(`Fizz`)
  }

  if (number % 5 === 0) {
    console.log(`Buzz`)
  }
}