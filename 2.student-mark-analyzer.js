/**
 * Problem 2: Student Marks Analyzer
Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.
Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }

Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

Test case 2
Input: { ict: 90, biology: 90, chemistry: 70 }
Output: { total: 250, average: 83.33, highest: "ict", lowest: "chemistry" }
 */

function analyzeMarks(marksObj) {
  //console.log(marksObj);
  let total = 0;
  let highestMark = -Infinity;
  let lowestMark = Infinity;
  let highestSubject = null;
  let lowestSubject = null;

  for (let subject in marksObj) {
    let marks = marksObj[subject];
    //console.log(subject, "->", marks);
    total += marks;

    if (marks > highestMark) {
      highestMark = marks;
      highestSubject = subject;
    }
    if (marks < lowestMark) {
      lowestMark = marks;
      lowestSubject = subject;
    }
  }
  //   console.log("Highest mark:", highestMark);
  //   console.log("Lowest mark:", lowestMark);
  //   console.log("Highest subject:", highestSubject);
  //   console.log("Lowest subject:", lowestSubject);
  //console.log(Object.keys(marksObj));
  let average = total / Object.keys(marksObj).length;
  //console.log("Total: ", totalMarks, " Average: ", averageMarks);

  return {
    total,
    average: parseFloat(average.toFixed(2)),
    highestSubject,
    lowestSubject,
  };
}
let output1 = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(output1);

let output2 = analyzeMarks({ ict: 90, biology: 90, chemistry: 70 });
console.log(output2);
