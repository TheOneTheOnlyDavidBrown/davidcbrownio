---
layout: post
title: "A Case Against Javascript's Arrow Function"
date: 2018-08-28
categories: musings
tags: [advice,development]
comments: true
image:
  feature: a-case-against-js-arrow-function-teaser.jpg
  teaser: a-case-against-js-arrow-function-teaser.jpg
  credit:
  creditlink:
---

It's not uncommon by any means to have a reference to this.somefunction() within the body of an arrow callback. For example, in your `success` function on an promise, you may call an `onSuccess` function that handles the logic after the call. It can be problematic to use an arrow function as the callback function for `success` because it "loses" the reference to `this`.

By "losing" what is really happening is that the closure of the arrow function is lexically bound to the `success` function of the promise library (because thats where the function is called). Therefore, when you reference `this` in your codebase in your success callback, it is not the `this` you are expecting.

Another side effect of the arrow function is that it is by definition an anonymous function. This makes for difficult stack-traces.

## Let's fix `this` AND have stack-traces

To get the correct reference to `this` in your callback, use a non-arrow function and `.bind(this)`. To get the stack-trace in a readable state, use a named function.

Lets dive into this by example. Here is a common object that will be used for both examples.

```javascript
// separate object because it will be used in both examples
const functionContainer1 = {
  fn: function namedFn(from) {
    // an error here would yield a stack-trace that says it failed at 'namedFn'
    console.log(this, 'from: ', from)
  }
}
```

Let's start with using functions as object properties. For this example, we'll use setTimeout(callbackFn) because it offers a callback function that runs in a separate closure. Notice the comments regarding what `this` object references at each step of the functions as well as where the stack-trace will indicate an error occurred.

```javascript
// `this` is the `window` object
const objectExample = {
  // bad for many reasons. reference to 'this' and bad stack-trace
  bad: () => {
    // 'this' is the 'window' object here
    setTimeout(()=>{
      // an error here would yield a stack-trace that says it failed at 'setTimeout'
      this.afterTimeout('objectExample bad after timeout') // this will fail because 'this' is  the `window` object
    }, 0);
  },
  // better because of the reference to 'this' but still bad because stack-trace is unhelpful
  better: function fn2() {
    // 'this' is the functionContainer obj
    setTimeout(() => {
      // an error here would also yield a stack-trace that says it failed at 'setTimeout'
      this.afterTimeout('objectExample better after timeout') // this works because `this` is the `objectExample` obj
    }, 0);
  },
  // best because it's the correct 'this' object and the stack-trace says it failed at 'myTimeoutFn'
  best: function fn3() {
    // 'this' is the functionContainer object
    setTimeout(function myTimeoutFn(){
      // an error here would also yield a stack-trace that says it failed at 'Object.myTimeoutFn' which is much easier to debug
      this.afterTimeout('objectExample best after timeout') // works because `this` is the `objectExample` object
    }.bind(this), 0);
  },
  afterTimeout: functionContainer1.fn
}

objectExample.bad();
objectExample.better();
objectExample.best();

```

Here's an example using classes:

```javascript
class MyClassExample {
  constructor(functionContainer1) {
    // putting this here to avoid using a getter or using a function return
    this.afterTimeout = functionContainer1.fn;
  }
  bad()  {
    // omitting because classes remove the issue with this from example 1
  }
  // better because of the reference to 'this' but still bad because stack-trace is unhelpful
  better() {
    // 'this' is the MyClassExample obj
    setTimeout(() => {
      // an error here would also yield a stack-trace that says it failed at 'setTimeout'
      this.afterTimeout('MyClassExample better after timeout'); // this works because `this` is the `MyClassExample` obj
    }, 0);
  }
  // best because it's the correct 'this' object and the stack-trace says it failed at 'myTimeoutFn'
  best() {
    // 'this' is the functionContainer object
    setTimeout(function myTimeoutFn() {
      // an error here would also yield a stack-trace that says it failed at 'MyClassExample.myTimeoutFn' which is much easier to debug
      this.afterTimeout('MyClassExample best after timeout'); // works because `this` is the `MyClassExample` object
    }.bind(this), 0);
  }
}

const classExample = new MyClassExample(functionContainer1);
classExample.better();
classExample.best();
```

## When to use arrow functions

It's still advisable to use arrow functions for functions such as `filter()`, `reduce()`, `map()`, etc. because they are usually one line returns with minimal likelyhood for error. Since the `return` can be omitted with arrow function shorthand (`() => true` is the same as `() => { returns true }`). The AirBnb styleguide recommends this as well.


## Workaround to name an arrow function

There is a way to "name" an arrow function by assigning it to a variable first. This helps with stacktraces but still lends itself to the issue of lexical binding of `this`.

Example:

```javascript
const namedArrowExample = () => {
  // an error here would yield a stacktrace that says it failed at 'namedArrowExample' which is ideal but...
  // `this` is the `window` object which isn't typically what you want
  setTimeout(() => {
    // `this` is the `window` object
  }, 0);
}
namedArrowExample();
```

## But I'm lazy and didn't read the article!

* Use named functions and bind `this` instead of using arrow functions in callbacks because it helps with stack-traces and referencing `this` in the callback because the lexical binding typically references the `this` that is desired.
* Use arrow functions in single line returns. `filter()`, `reduce()`, `map()`, etc.
* Assigning your arrow function to a variable helps with stack-traces but not the binding of `this`.
