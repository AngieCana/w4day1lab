// function minusOne(num){
//   let total = num;
//   for(i = 0; i < num; i++){
//       total = num - 1
//   }
//       console.log(total);
//       return total;
// }

// minusOne(10);
// minusOne(100);
// minusOne(Infinity);

// function makeSentence(first, second, third){
//   let totalSentence = first + second + third;
//   console.log(totalSentence);
//   return totalSentence

// }

// makeSentence('I ', ' want', ' chimichangas')

function makeSentence(subject, verb, object){
  let sentence = 'Oh boy, do ' + subject + ' ' + verb + ' ' + object + ' or what?'
  return sentence
}

let sentenceResult = makeSentence('I', 'want', 'chimichangas');
console.log(sentenceResult);


// function getLastElement(arr){
//   let lElement =  arr[arr.length - 1]
//   console.log(lElement);
//   return lElement;
// }

// getLastElement([1, 2, 3, 4, 5, 6])
// getLastElement(['a', 'b', 'c'])
// getLastElement([[1,2,3],[4,5,6]])