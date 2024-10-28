const postsArr = [
  { post: "test 2014-06-23", date: new Date("2014-06-23") },
  { post: "test 2013-06-23", date: new Date("2013-06-23") },
  { post: "test 2012-06-23", date: new Date("2012-06-23") },
  { post: "test 2011-06-23", date: new Date("2011-06-23") },
  { post: "test 2010-06-23", date: new Date("2010-06-23") },
  { post: "test 2015-06-23", date: new Date("2015-06-23") },
];

function FindFirstAndLastPost(postArr) {
  let firstPost = postArr[0];
  let lastPost = postArr[0];
  for (let i = 1; i < postArr.length; i++) {
    if (postArr[i].date < firstPost.date) {
      firstPost = postArr[i];
    } else if (postArr[i].date > firstPost.date) {
      lastPost = postArr[i];
    }
  }
  console.log("firstPost: ", firstPost);
  console.log("lastPst: ", lastPost);
}

FindFirstAndLastPost(postsArr);
