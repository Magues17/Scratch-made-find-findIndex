let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 1000);

const person = {
  firstName: "Jack",
  lastName: "Black",
  birthDate: "May 5, 1955",
  gender: "Male",
};

function logObjectKeys(obj) {
  console.log(Object.keys(obj));
}

function logObjectEntries(obj) {
  console.log(Object.entries(obj));
}

const arrayOfPersons = [
  {
    firstName: "Jack",
    lastName: "Black",
    birthDate: "May 5, 1955",
    gender: "Male",
  },
  {
    firstName: "Jill",
    lastName: "White",
    birthDate: "June 6, 1987",
    gender: "Female",
  },
  {
    firstName: "John",
    lastName: "Doe",
    birthDate: "July 7, 2005",
    gender: "Male",
  },
];

function logOddBirthDates(arr) {
  for (const obj of arr) {
    const birthYear = new Date(obj.birthDate).getFullYear();
    if (birthYear % 2 !== 0) {
      console.log(obj.birthDate);
    }
  }
}

arrayOfPersons.map((person) => console.log(person));



const isBefore1990 = (birthDate) => {
  const date = new Date(birthDate);
  const jan1_1990 = new Date("1990-01-01");
  return date < jan1_1990;
};

const isOldEnough = (birthDate) => {
  const date = new Date(birthDate);
  const now = new Date();
  const ageInMs = now - date;
  const ageInYears = ageInMs / 1000 / 60 / 60 / 24 / 365;
  return ageInYears >= 21;
};

const males = arrayOfPersons.filter((person) => person.gender === "Male");
console.log("Males:", males);

const bornBefore1990 = arrayOfPersons.filter((person) =>
  isBefore1990(person.birthDate)
);
console.log("Born before 1990:", bornBefore1990);

const oldEnough = arrayOfPersons.filter((person) =>
  isOldEnough(person.birthDate)
);
console.log("Old enough:", oldEnough);
