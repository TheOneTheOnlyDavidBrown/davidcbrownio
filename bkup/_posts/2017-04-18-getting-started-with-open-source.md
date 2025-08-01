---
layout: post
title: "Getting started with open source"
date: 2017-04-18
categories: musings
tags: [open-source,git,github,advice,development]
comments: true
image:
  feature: hacker.jpg
  teaser: hacker-teaser.jpg
  credit:
  creditlink:
---

It wasn't until two years into my career that I made my first open source contribution. I, and if you're reading this you probably feel the same, wasn't entirely sure how to go about pushing code to a project. After all, most projects don't include information about contributing. It can be tribal knowledge. Tribal knowledge that I wish to share today.

### Why contribute to open source

Simply put: it will make you a better programmer.

It will expose you to many new tools and patterns that you won't be exposed to in your current team.

The more code you expose yourself to, the better the code you write will be. If you subscribe to Malcolm Gladwell's *10,000 hour rule* from his book [*Outliers*](http://amzn.to/2nXgjT2){:target="_blank"}, you know that exposure and practice play a huge part in developing any skill-sets.

### Tackling the fear

It can be intimidating to a younger developer to push code to a project that (presumably) a much more senior developer maintains. One of the biggest mistakes I made coming out of college was assuming seniority correlated to an increase skill-set. More on that in a future post.

**There is nothing to fear in contributing to an open source project!** Worst case scenario, the maintainer rejects your change and you walk away with experience because you exposed yourself to another codebase and practiced writing more code making you a better developer.

### It looks good to future employers

I consider open source contributions a big plus on a developer's resume. It shows enthusiasm and excitement for their field and their craft of building great software. With so many open source libraries available, if they haven't contributed to something, I'd be concerned.

### Why you should let your employees contribute

If you are an employer/manager (or will one day be one), let your employees contribute to open source libraries. The reasons mentioned above will help them write better code faster for YOUR company. You as an employer benefits from the increased skill-set of your employee.

Now if you are content with not challenging your employees and letting their skills go stagnant until they decide to leave for a company they feel they will grow in, then go for it. The cost of replacing your team is much more than the small time investment of allowing your team to learn and give back to the community. The same community that releases all the open source tools and libraries you use on a daily basis.

Without further digression, lets get to why you are reading this...

## How to contribute

For this tutorial we will be fixing what amounts to a documentation fix. After all, poor documentation is a problem in open source.

Here is the step by step process to contribute to an open source project. This is an expansion of [my contribution guidelines](https://github.com/TheOneTheOnlyDavidBrown/contributing_guidelines/blob/master/CONTRIBUTING.md){:target="_blank"}

- First things first, create a [**GitHub**](http://github.com){:target="_blank"} account.

- **Then learn some basic Git.** [This tutorial](https://try.github.io/levels/1/challenges/1){:target="_blank"} will teach you enough of the basics to get started.

- Now that you've created your Github account, head over to [**my repository**](https://github.com/TheOneTheOnlyDavidBrown/getting-started-with-open-source){:target="_blank"} and click on the **'fork'** button. This creates a copy of the codebase under your name so you can edit and add code as needed. For this tutorial, I'll have you add your name/social media handle (how else am I supposed to follow you?) to the README.md file.

- Now that you have the code in a repository that you own, it's time to clone it to your machine. **Click the 'clone' button** and copy the URL to your clip board.

- Open up a terminal and **navigate to the directory that houses your projects**. So if your `projects` directory is in your home directory, you'd enter `cd ~/projects` then `git clone <paste your url here>` (no <>s) then run `cd ` to enter the projects directory.

- You now have your project on your machine and ready to edit! Woohoo!

- Typically you'd **create a branch** at this point but I'm omitting that for simplicity

- Now open the directory in your editor of choice. **Open to the REAME.md file and add your name/handle** and save it.

- If this were a code based change, **this is where you would write/run the tests to make sure you didn't break anything.**

- Go back to the terminal and type **`git add README.md`**. This stages your files so you can clump changes together for simplicity. You could add multiple files here so they are all pushed in one chunk.

- Then **`git commit -m 'adding a name to README.md'`**. Or you could put something more clever in the commit message to make me laugh. This says that all the files that you staged are one cohesive change and the message is what will go in the log.

- Now run **`git push origin master`**. This sends your code to your repository on GitHub. Just one more step before it's up to me to merge in your changes.

- **Navigate to my repository on GitHub** (the one you created your fork from).

- Click **New pull request**.

- **Compare the changes** to make sure you are trying to merge the right code in.

- Click **Create pull request** and you are done.

- From there, **I can merge your changes in!**

Hooray! **You made your first open source contribution!** This process is the same (sans any project specific requirements like running tests) for any project on GitHub so go out and contribute!

If you liked this article please share it with someone.
