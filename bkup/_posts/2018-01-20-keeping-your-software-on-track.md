---
layout: post
title: "Keeping Your Software On Track"
date: 2018-01-20
categories: musings
tags: [advice,development,project-management]
comments: true
image:
  feature: keeping-software-on-track.jpg
  teaser: keeping-software-on-track-teaser.jpg
  credit:
  creditlink:
---

I have worked on many projects across many teams. The following rules I found to be the most effective way to keep your software on track. If you have any rules you’d like to add, let me know!


### Rule #1: Have a ticketing system and never stray
Adopt the mantra “no ticket, no work.” Every time a task is verbally assigned, it is untrackable, and leaves too much room for ambiguity and faulty recollection. This is the single fastest way for a project to go off the rails. It also creates scope creep and can easily lead to a “death by a thousand cuts” scenario. Don’t perform work off of an instant message/email either.

Make sure these tickets are actionable and descriptive. Tickets should have defined completion metrics. If it creates a new bug, make a separate ticket for it.


### Rule #2: If the code lacks automated tests, assume it’s broken
Automated testing gives the developer a sense of confidence that their change didn’t break anything else. Manual testing is tedious, expensive, and prone to error. This isn’t to say manual testing isn’t still needed, sometimes you need the lights hitting your retina to verify the correctness.

Here is a simple procedure to write enough tests without overtesting:
* Write your base tests. I.e. your high level, no brainer “the save button should save” tests.
* Timebox yourself to 2-3 minutes to come up with whatever edge cases you can think of then write these tests.
* Write your code until all tests are passing. (this is the red-green-refactor cycle)
* When (not if) bugs occur, write tests to cover the newly found bug, then fix it.

Will this create 100% coverage? No. The point is to exploit Pareto's Principle (a.k.a. The 80/20 Rule) then refine as needed.


### Rule #3: Use continuous integration tests
This is a final verification step to make sure you didn’t break anything else before you code is merged. This runs all of your tests before your merge to develop/master is complete. If you followed every step above regarding writing tests, you will be in good shape. It will give the developers one less thing to worry about.


### Rule #4: Have a git-flow and FOLLOW IT!
A proper git-flow is a post in and of itself, but here is a good high level flow:

* Make branch (with the ticket number in the name).
* Commit to the branch (with the ticket number in the commit message).
* Create pull request (PR).
* Someone else on the team should review it for consistency.
* Your continuous integration tests should run against this PR.
* Then merge it to the correct branch.

Refrain from ever committing directly to master. With CI and PRs in place, just don’t do it. Committing directly to master causes headaches when you are trying to keep parity across multiple branches


### Rule #5: Have defined meeting times and a defined purpose for the meetings
Define your meeting times (daily stand-up, planning meeting, et. al.) then give your developers time and space to finish their tickets. Don’t interrupt them to tell them you assigned them a ticket or for an ad-hoc status update or statements like “I sent you an invite for a meeting next week”. Don’t do it. EVER! The task switching destroys their productivity, mentally exhausts them - which WILL lead to burnout, and increases the chance of bugs introduced (albeit less since the tests should have been written before coding). Impromptu meetings will drive good talent away. Now think about how much it would cost to recruit and retrain a replacement. Is it worth it to tell them they have a new ticket assign that they will absolutely see in due time without intervention? Didn’t think so.


### Rule #6: Set deadlines and expectations and allow your developers to work when/where/how they please

Parkinson’s Law states that “work expands so as to fill the time available for its completion.” And as such, it doesn’t matter how many hours your developer puts in, they will hit their deadline. Trust them. They are functioning professional adults, or you wouldn’t have hired them. Treat them as such.

Give them deadlines and expectations and allow them do what you hired them to do: create good software. Let them work when, where, and how they please. If you don’t trust them enough to accomplish their tasks without supervision, why did you hire them? Or worse, why are you keeping them?

If you absolutely insist they work on site, at least make the culture as catering as possible. One developer wants to wear shorts, t-shirt, and flip flops? Let them! There’s a good chance no outside people will see them anyway. They will write better code if they are comfortable and not wearing long pants in 95+ degrees of high humidity weather.

Your developers know when their mind is working and when all their thought cycles are depleted for the day. They should never have to feel like they have to put in “butt time” to prove they’re dedicated. That practice is a relic of the before times and detrimental to much more than just the project.


### Rule #7: Have an easy deploy
Every extra step is another step that could break something. If you have to edit 5+ files to update various flags, update the version, and uncomment lines, you’re doing it wrong. If one minor step is missed and you build and deploy it then realize you have to rebuild it, it takes time and unnecessary energy.


### Rule #8: Use a database migrator and seed data
Using a migrator is basically using version control on your database schema. It allows you to shift back to previous releases (or other branches) without having to deal with incompatible database schemas. Seed data allows you to populate the data correctly. In a eutopia you should never have to manually run a SQL script.


### Rule #9: Have fun
Seriously. Nothing kills a company faster than a poor culture. The culture trickles down to the project and will impact it. Happy developers make good code. It’s that simple. Once the rules above become second nature, it makes writing software so much easier and more enjoyable.


### Bonus Rule #1: Give your developers what they need

If your developer asks for a new keyboard/monitor/MacBook Pro, BUY IT! Think about the cost of retraining a replacement. It is drastically more than this equipment. Plus it builds loyalty because it says you support them and want to enable them to do their best work.


### That wraps that up
I hope you learned something, and happy hacking! If there's anything you'd like added, let me know.
