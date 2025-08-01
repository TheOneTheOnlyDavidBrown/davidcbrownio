---
layout: post
title: "Composition v. Inheritance"
date: 2018-05-01
categories: musings
tags: [open-source,advice,programming]
comments: true
image:
  feature: computer.jpg
  teaser: computer-teaser.jpg
  credit:
  creditlink:
---



One thing is constant in all of software development - your project requirements will change. Most of the headaches of major refactors can be avoided by using the correct design pattern. Inheritance can work but often you will find yourself in a position of finding your inheritance to be a 'kind of like' relationship.

Every developer at some point has been told "don't repeat yourself" or DRY. This isn't terrible advice in theory, but it lends itself to refactoring into poor designs. Poor design decisions cost your company money, can delay a product launch, and usually end with the product being less than stellar and difficult to maintain. The more difficult a product is to maintain, the more costly it is.

By using a software pattern that is flexible, you will reduce the cost of change, make the project more maintainable, and most likely finish the project earlier. There are a plethora of design patterns on the composition design pattern and how it can be used in place of inheritance. This is not a one size fits all pattern and should only be used where it make sense. As should inheritance.

If you're familiar with Entity Relationship Diagrams (ERDs), you'll realize that database design does not have inheritance but rather a 'has' relationship. A plane has many engines, for example. You will also realize that a properly thought out database is very flexible and prevents a lot of anomalies. So when you develop software, you should put yourself into a database architect mindset and develop with a pattern that mimics a database design.

For sake of argument, let's say you're developing a game. You have two classes for two characters named `Mario` and `Bowser`. You realize both classes share common methods of `jump` and `move` so you do the logical thing and refactor that into a parent class called `Character` and inherit it in your classes, right? Sure at this point in time it makes sense but in the long term it's not an ideal pattern. Long term your boss will undoubtedly come to and say 'We are adding a new character...a ghost.' And you think "hmmm a ghost doesn't have the same physics as the other two characters but it's still a character."

At this point you have a decision to make. Do you inherit the character class because a ghost is "sort of like" it? No! It's time to refactor to a better design pattern. So what is a good pattern in this case? Composition. Let's now take the `jump` and `move` methods and move them into a `Physics` class.

Moving it into a `Physics` class does four major things

### 1) It encapsulates the code

It encapsulates the code by bundling the physics logic and separating it from the parent class. Editing the physics class only alters the physics.

### 2) It allows for re-usability in another project, class without having to worry about parent behavior

Because it's no longer in the parent, your smaller class can be reused easier.

### 3) It lets you have a one to many relationship.

Take the example of a plane/car. Instead of putting the engine in a parent `Vehicle` class, you could put the engine in it's own composition class which allows you to have a one to many relationship.

```javascript
let myPlane = new Plane();
myPlane.engineOne = new Engine();
myPlane.engineTwo = new Engine();
```

### 4) It enables swapability

If your character above is put into an environment where the physics are altered (space, water, etc), you can swap the 'Physics' class for one that works in the new environment and the code still works. Like wise you can swap the original back when needed.

### When to use which?

If the answer to the question "Is this a 'has-a' or an 'is-a'?" relationship is "has-a", you should use composition. If it's "is-a", use inheritance.









Composition vs Inheritance

The child-parent relationship in inheritance is an `is a` relationship. Where as composition, much like a database, has an `has a` relationship. This gives us a lot of advantages right off the bat. It has better encapsulation so you can edit the physics class, it makes the parent class smaller, and you can have multiple physics attributes so if the character is in an environment where he can't jump as high you can swap out the physics and swap the original back.

* encapsulation
* reuse
* swappable





inherit
* ripple effect








intro (ie think like youre designing a database)
what is composition?
benefits
what is inheritance?
what problem does it solve?
when to use
