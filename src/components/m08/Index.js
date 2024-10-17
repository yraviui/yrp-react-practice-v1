import React from 'react'

// https://www.youtube.com/watch?v=szXMBGKGTdE

const M08 = () => {
  // Q1: Flat a 2 levels deep array
  const arr = [ 1, 2, [3, 4, [5, 6, [7, 8]]]]
  console.log(arr.flat())
  console.log(arr.flat(2))
  console.log(arr.flat(3))

  // Q2: Reverse a String
  const string = 'This is testing string reverse'
  const reverse = string.split('').reverse('').join('')
  console.log(reverse)

  // Q3: Find the occurence of words in an array[skils]
  // output: {html: 2, css: 1, javascript: 2, react: 1}
  const skils = ['html', 'css', 'html', 'javascript', 'react', 'javascript']
   const countWordOccurence = () => {
    const count = {}
    skils.forEach( (word) => {
      if(count[word]){ count[word]++}
      else{
        count[word] = 1
      }
    })
    return count
  }
  const result = countWordOccurence()
  console.log(result)

   // Q4: Find maximum number in array
   const numberArr = [1, 10, 3, 5, -4, 99]
   const findMaxNumber = (arr) => arr.reduce((prev, current) => (prev > current ? prev : current)) 
   console.log(findMaxNumber(numberArr))

  // Q5: Find the value in unique value in array
  const arr1 = [1, 2, 1, 1, 3, 2, 3, 4, 3, 2]; // output: [1, 2, 3, 4]
  // way 1
  console.log('unique: ', [...new Set(arr1)])
  //way 2
  const unique = arr1.filter((item, index, array) => array.indexOf(item) === index)
  console.log('unique', unique)

  //Q6: Make the statement from Array --- output: Let's learn software development @itscodingDoctor
  const statmentArray = ["Let's", "learn", "software", "development", "@itscodingDoctor"]
  console.log(statmentArray.join(' '))

  // Q7: Reverse Array    output: [4, 3, 2, 1]
   const q7Arr = [1, 2, 3, 4]
    // Way 1 
  console.log('Way 1: ', q7Arr.reverse())
  // way 2
  const q7Reversed = q7Arr.reduce((acc, current) => {
    acc.push(current)
    return acc
  },[])
  console.log('Way 2 q7Reversed: ', q7Reversed)

  return (
    <div>
      <h1>IMP Questions and Solutions</h1>
    </div>
  )
}

export default M08
