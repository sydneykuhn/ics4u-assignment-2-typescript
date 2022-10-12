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
 * @returns {number} characterCounter is the max characters in a string.
 */
function maxRun(userInput: string): number {
  // Set Variables
  let runLength = 0
  let runCounter = 0

  // This function is where the max run is calculated
  userInput.split('').forEach((value) => {
    const characterCount = userInput.split(value).length - 1
    if (runCounter < characterCount) {
      runCounter = characterCount
      runLength = runCounter
    }
  })
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
