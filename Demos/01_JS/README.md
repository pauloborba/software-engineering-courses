1. Datatypes

Read -->
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

Obs. Maps and Sets are not implemented with the class Set (not natively)

1.1. object

point = {x: 12.0, y: 3.4};

1.2 class

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

a = new Point(1, 3.0);
b = {x: 1, y: 3.0}; // <-- this is an object, not a Point object

2. Array methods (map, reduce, filter, sort, some, every, foreach) 

2.1 The map function

a = [1, 2, 3];
a.map(x => 2*x)
// [2, 4, 6]

2.2 The reduce function

a = [1, 2, 3]
a.reduce((x,y)=> x+y)
// 6

2.3 The filter function

a = [1, 2, 3]
a.filter(x => x%2==0)
// [2]

2.4 The sort function

a = [3, 2, 1]
a.sort()
// [1, 2, 3]

2.5 The some function

a = [3, 2, 1]
a.some(x => x%2==0)
// true

2.6 The every function

a = [3, 2, 1]
a.every(x => x%2==0)
// false

2.7 The foreach function (loops)

a = [3, 2, 1]
a.forEach(x => { console.log(x) })
// you guess...

2.7 Spread operator for arrays (ES6)

const names = ["James", "Jess"];
const otherNames = [ "Lilly", "Sevi"];
const allNames = [...names, ...otherNames]; 
console.log(allNames); 
// ["James", "Jess", "Lilly", "Sevi"];

3. Error Handling

~~~
try {
  const url = new URL("sd);
} catch(ex) {
  console.log("something bad happened");
}
~~~

4. Equality

  "32" == 32 // True (conversion)
  "32" === 32 // False (no conversion)

5. ES6 Syntax

5.1 Destructuring

const person = {
  firstName = "James",
  secondName = "Cook"
}

const firstName = person.firstName;
  OR
const {firstName} = person;

5.2 Back tick strings

console.log(`${person.firstName}`)

6. Async JS (AJAX)
https://www.youtube.com/watch?v=_8gHHBlbziw

6.1 Callbacks (original approach)

~~~
console.log("start")
// asynchronous callback
setTimeout(() => {
  console.log("called after 2s")
}, 2000)
console.log("finish")
// start
// finish
// called after 2s

// synchronous callback
const items = [1, 2, 3, 4, 5];
items.forEach((item)=>{
  console.log(item);
})

// simulate call to a server
console.log("start");
function loginUser(email, password, callback) {
  setTimeout(()=> {
    callback({userEmail: email});
  }, 2000);
}
function getVideos(email, callback) {
  setTimeout(()=> {
    callback(["video1", "video2", "video3"]);
  }, 2000);
}
// ATTENTION: callback hell!!!
loginUser("Joe", "lala", user => {
    console.log(user);
    getVideos("Joe", videos => {
      console.log(videos);
    })
})
console.log("finish");

~~~

6.2 Promises (new approach)

// basic example
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({user: 'ed'});
    reject(new Error("server failed"))
  }, 2000);
});

promise
  .then((data) => {
    console.log(data) 
  })
  .catch(error => {
    console.log(error.message)
  })

// simulate call to a server
console.log("start");
function loginUser(email, password) {
  return new Promise((accept, reject) => {
    setTimeout(()=> {
      accept({userEmail: email});
    }, 2000);
  });
}
function getVideos(email) {
  return new Promise((accept, reject) => {
    setTimeout(()=> {
      accept(["video1", "video2", "video3"]);
    }, 2000);
  });
}

loginUser("Joe", "lala")
  .then(user => getVideos(user.userEmail))
  .then(videos => console.log(videos))

console.log("finish");

// barriers

const youtube = new Promise(resolve => {
  setTimeout(()=> {
      console.log("resolved youtube")
      resolve(["video1", "video2", "video3"]);
    }, 2000);
})

const facebook = new Promise(resolve => {
  setTimeout(()=> {
    console.log("resolved facebook")
      resolve(["videoA", "videoB", "videoC"]);
    }, 2000);
})

Promise.all([facebook, youtube])
  .then(result => console.log([...result[0], ...result[1]]))

6.3 Async Wait

// no then, explicit indication of async (parallel) code

function loginUser(email, password) {
  return new Promise((accept, reject) => {
    setTimeout(()=> {
      accept({userEmail: email});
    }, 2000);
  });
}
function getVideos(email) {
  return new Promise((accept, reject) => {
    setTimeout(()=> {
      accept(["video1", "video2", "video3"]);
    }, 2000);
  });
}

async function grabVideos() {
  const data = await loginUser("joe@la.la.land", "foo");
  const videos = await getVideos(data.userEmail);
  console.log(videos);
}

grabVideos();