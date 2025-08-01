---
layout: post
title: "Node first browser development"
date: 2017-04-27
categories: musings
tags: [development,javascript,node]
image:
  feature: javascript.jpg
  teaser: javascript-teaser.jpg
  credit:
  creditlink:
---
Recently, I released an [open source library recently](https://github.com/TheOneTheOnlyDavidBrown/crunchpow-model){:target="_blank"}. After building it, I realized I approached it in a way that yields better browser based Javascript tools. I built it using the [Kent C. Dodds' approach to writing open source Javascript libraries](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-introduction){:target="_blank"}, and what I found was that it was much quicker to develop in node than in a browser especially when you use test driven development. It follows the Unix philosophy of building applications that do one thing but do it well. This approach follows the module pattern for the logic part of the application. More on the module pattern can be found in Addy Osmani's book [Learning JavaScript Design Patterns](http://amzn.to/2pm5yJv){:target="_blank"}. I strongly recommend this book to anyone who wants to learn more about design patterns.

The long and short of it is this: building your application in node with tests then using the Universal Module Loader makes your browser based library better and more maintainable due to it's modularity and separation from the rest of your application.

With modern frameworks and their data bindings, **the rendered view should be no more than a pretty representation of the model for the user to view**. Effectively if you put a 1 second interval around your endpoint call to save data, it should always have the correct data ready to be sent.

With that being said, it follows that **all actions on the page should be accessible programmatically.** The view is just the interface for the user to view the model.

So if all actions should be accessible programmatically, then it makes sense to build your library without the interface (using Node) first. It makes it easier to test and quicker to develop because you can have your tests in a terminal with a watch flag on it so you can see immediately if your code is doing what it's supposed to. And, equally if not more importantly, verify that your changes didn't break any existing features.

This is an extension of the idea of [separating your logic from your framework](http://davidcbrown.io/musings/decoupling-application-logic-from-your-framework.html){:target="_blank"} but in this case you have less dependency on both your framework AND the rest of your application.

Example:

```html
<button ng-click="$ctrl.showStatus = !$ctrl.showStatus">Toggle status</button>
```

**Don't do this!** Logic in the controller limits testability.

Here's a better way:

```html
<button ng-click="$ctrl.toggleStatus()">Toggle status</button>
```
```javascript
class MyPage {
    toggleStatus() {
        this.showStatus = !this.showStatus;
    }
}
```

You may think this is nitpicky but it makes the code more testable and adheres to the principle of the view being the visual layer and not the logic layer. You can't test the expression in the ng-click in the first example but you can in the second because it's in the logic layer instead of the view layer. Node first development forces you to write it in the form of the second because there is no view layer in Node!

To sound like a broken record (I wonder how many fellow millennials know what that means), **Node first development yields a more testable codebase.**

With the latter you can now run a test that says:

```javascript
// set showStatus to false
// expect it to be false
// run toggleStatus()
// expect showStatus to be true
```

You can't do this with the logic in the view layer.

Now that you've learned a new approach, use it! And if you liked this article, you'll definitely like [this article](http://davidcbrown.io/musings/decoupling-application-logic-from-your-framework.html){:target="_blank"}. And feel free to share if you enjoyed it!
