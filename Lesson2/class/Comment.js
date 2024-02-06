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
}

const firstComment = new Comment("First comment");
firstComment.upvote();
console.log(firstComment.votesQty);
console.log(firstComment instanceof Comment);
firstComment.upvote();
console.log(firstComment.votesQty);
console.log(firstComment instanceof Object);

console.log(Comment.mergeComments("I am", "Artuom"));
