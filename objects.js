// Creating an object with keys and values
let studentObject = {
  name: 'Zac Ingoglia',
  height: '600',
  id: 18,
  favColor: 'black',
};

// Prompt version
// let studentName = {};
// let nameSpot = prompt('Please enter your name.', ' ');
// studentName['name'] = nameSpot;

for (const key in studentObject) {
  //   console.log(`${key}: ${studentObject[key]}`);
}

// Function version
const createStudent = (name, id) => {
  return {
    name: name,
    id: id,
  };
};

const studentZac = createStudent('Zac Ingoglia', 18);

// console.log(
//   `The student's first name is ${studentZac.name} and his id is ${studentZac.id}.`
// );

const run = () => {};

const catheryn = {
  studentName: 'Catheryn',
  grade1: 70,
  grade2: 27,
  grade3: 27,
  grade4: 13,
  grade5: 60,
  grade6: 3,
  grade7: 29,
  grade8: 23,
  grade9: 67,
  grade10: 16,
  grade11: 18,
  grade12: 70,
  grade13: 76,
  grade14: 13,
  grade15: 26,
  grade16: 30,
  grade17: 41,
  grade18: 16,
  grade19: 33,
  grade20: 26,
  grade21: 59,
  grade22: 1,
  grade23: 57,
  grade24: 3,
  grade25: 61,
  grade26: 78,
  grade27: 10,
  grade28: 22,
  grade29: 62,
  grade30: 72,
  grade31: 59,
  grade32: 82,
  grade33: 59,
  grade34: 84,
  grade35: 20,
  grade36: 34,
  grade37: 52,
  grade38: 81,
  grade39: 76,
  grade40: 41,
  grade41: 18,
  grade42: 90,
  grade43: 41,
  grade44: 31,
  grade45: 16,
  grade46: 15,
  grade47: 68,
  grade48: 44,
  grade49: 47,
  grade50: 25,
  grade51: 20,
  grade52: 20,
  grade53: 46,
  grade54: 44,
  grade55: 14,
  grade56: 79,
  grade57: 81,
  grade58: 2,
  grade59: 62,
  grade60: 88,
  grade61: 29,
  grade62: 34,
  grade63: 27,
  grade64: 45,
  grade65: 26,
  grade66: 59,
  grade67: 75,
  grade68: 73,
  grade69: 31,
  grade70: 82,
  grade71: 85,
  grade72: 39,
  grade73: 13,
  grade74: 14,
  grade75: 9,
  grade76: 52,
  grade77: 49,
  grade78: 27,
  grade79: 4,
  grade80: 30,
  grade81: 38,
  grade82: 21,
  grade83: 10,
  grade84: 73,
  grade85: 44,
  grade86: 23,
  grade87: 24,
  grade88: 13,
  grade89: 69,
  grade90: 35,
  grade91: 63,
  grade92: 8,
  grade93: 57,
  grade94: 59,
  grade95: 79,
  grade96: 76,
  grade97: 74,
  grade98: 81,
  grade99: 96,
  grade100: 13,
};

const gradeAvg = (studentGrades) => {
  let gradeCount = Object.keys(studentGrades).length;
  let gradeSum = 0;
  for (const key in studentGrades) {
    if (Number.isFinite(studentGrades[key])) {
      gradeSum = gradeSum + studentGrades[key];
    } else {
      gradeCount = gradeCount - 1;
    }
  }
  if (gradeCount === 0) {
    return null;
  }
  return gradeSum / gradeCount;
};

console.log(
  `${catheryn.studentName}'s grade average is: ${gradeAvg(catheryn)}%`
);

const testCase1 = {
  studentName: 'Zac',
};
console.log(
  `${testCase1.studentName}'s grade average is: ${gradeAvg(testCase1)}%`
);
