
function divide (numerator, denominator) {
  if (denominator === 0) {
    throw Error("Attempted to divide by zero.")
  }
  return numerator/denominator
}
console.log(divide(12345,0));

// Upon running the second example, the teacher gets TypeError: lab.runLab is not a function.

// Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined. If the exception is thrown, result should be set to the text "Error thrown".

 function gradeLabs(labs) {
   for (let i=0; i < labs.length; i++) {
      let lab = labs[i];
      let output = `${lab.student}'s code worked: `
      //console.log(`${lab.student} code worked: ${result === 27}`);

      try {
       let result = lab.runLab(3);
       output += result === 27;
      } catch(err) {
          output = "error thrown"
      }
          console.log(output)
      }   
   }
 
/*
let studentLabs = [
   {
      student: 'Carly',
      runLab: function (num) {
         return Math.pow(num, num);
      }
   },
   {
      student: 'Erica',
      runLab: function (num) {
         return num * num;
      }
   }
];

gradeLabs(studentLabs);
*/

let studentLabs2 = [
   {
      student: 'Blake',
      myCode: function (num) {
         return Math.pow(num, num);
      }
   },
   {
      student: 'Jessica',
      runLab: function (num) {
         return Math.pow(num, num);
      }
   },
   {
      student: 'Mya',
      runLab: function (num) {
         return num * num;
      }
   }
];

gradeLabs(studentLabs2);