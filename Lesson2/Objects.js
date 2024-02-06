class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  upvote() {
    this.votesQty += 1;
  }
  static mergeComments(first, second) {
    return `${first}${second}`;
  }
}
const firstComents = new Comment("First Comment");
console.log(firstComents);
Comment.mergeComments("First comment", "Second comment.");
console.log(Comment.mergeComments(5, 6));

class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}
const myArray = new NumbersArray(2, 5, 7);
console.log(myArray);
myArray.sum();
console.log(myArray.sum());

const mycity = {
  city: "NYC",
  popular: true,
  country: "USA",
};
console.log(mycity);
console.log(mycity.popular);
mycity.continent = "North America";
console.log(mycity);
mycity["border"] = "Canada";
console.log(mycity);
const borderSouth = "border";
mycity.border = "Mexico";
console.log(mycity);

const myCity = {
  city: "New York",
};
myCity["popular"] = true;
console.log(myCity);
const countryPropertyName = "country";
myCity[countryPropertyName] = "USA";
console.log(myCity);

//Мутирование копий

const person = {
  name: "Artuom",
  age: 25,
};
const person2 = person;
person2.age = 26;
person2.isAdult = true;
console.log(person);
console.log(person2);
person.told = 6.5;
console.table(person);

const myObject = {
  x: 10,
  y: true,
  z: "abc",
};

for (const key in myObject) {
  console.log(key, myObject[key]);
}
Object.keys(myObject).forEach((key) => {
  console.log(key, myObject[key]);
});

Object.values(myObject).forEach((values) => {
  console.log(values);
});
console.log(Object.keys(myObject));
