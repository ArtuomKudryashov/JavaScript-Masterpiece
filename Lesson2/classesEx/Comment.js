class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }
  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
  static mergeComments2(first, second) {
    return `${first.text} ${second.text}`;
  }
  static mergeComments3(first, second) {
    return `${first} ${second}`;
  }
}

const firstComment = new Comment("First comment1");
firstComment.upvote();
console.log(firstComment.votesQty);
console.log(firstComment instanceof Comment);
firstComment.upvote();
console.log(firstComment.votesQty);
console.log(firstComment instanceof Object);

console.log(Comment.mergeComments("I am", "Artuom"));
console.log(firstComment)

const secondComment = new Comment("Second comment2")
secondComment.upvote();
secondComment.upvote();
console.log(secondComment.votesQty)


let a=Comment.mergeComments('FirstComment','SecondComment')
console.log(a)

let b=Comment.mergeComments2(firstComment,secondComment)
console.log(b)

let с = Comment.mergeComments3(firstComment.text, secondComment.text);
console.log(с); // Выведет: "First comment Second comment"