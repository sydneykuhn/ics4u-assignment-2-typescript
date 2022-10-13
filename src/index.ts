/**
 *
 * The program splits an array of user input and
 * finds the longest run of one character.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2020-10-11
 */

import promptSync from 'prompt-sync'

/**
 * This function finds the run in the userInput
 *
 * @param {string} userInput is the string the user inputted.
 * @returns {number} runLength is the length of the longest run.
 */

function maxRun(userInput: string): number {
  // Set Variables
  let value = 1
  let runLength = 1

  for (let counter = 0; counter < userInput.length; counter++) {
    if (userInput.charAt(counter) === userInput.charAt(counter + 1)) {
      value += 1
    } else {
      if (value > runLength) {
        runLength = value
        value = 1
      }
    }
  }
  if (value > runLength) {
    runLength = value
    value = 1
  }
  return runLength
}

// Set Constants
const prompt = promptSync()

// Input
console.log('Assignment 2')
console.log(
  'This program calculates the length of the largest run in a string.'
)
const userInput = prompt('Enter a string : ')

// Process
const runLength = maxRun(userInput)

// Output
console.log(
  `The longest run in the string ${userInput} consists of ${runLength} characters.`
)
console.log('\nDone.')
