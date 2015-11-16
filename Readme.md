<h1>ReadMe for PromptLy</h1>


<b>Demo</b>

You can test a fully working live demo at: http://innocent-island.surge.sh/#/.

You can review my code at: https://github.com/JefBlocker/assignment24.


<b>What is PromptLy</b>

PromptLy is a single-page web app that allows writers to write 250 words from a writing prompt.  The benefit is to allow writers to accumulate work, improve their craft, and engage with other writers in one place.


<b>Intended Users</b>

<u>Writers Who Struggle to Find Time to Write</u> - Write is a verb, so if you're going to be a writer, you have to write.  PromptLy provides options for writers to write in short periods that accumulate over time.  I plan to add a timer function to allow writers to write as quickly as they can to accumulate words in a specified amount of time.

<u>Writers Who Want to Improve Their Craft</u> - PromptLy limits writing posts to 250 words, which is the average number of words per page in a double-spaced manuscript.  This allows writers to improve their craft by learning to choose words and structure sentences in the most economical way to express the most powerful meaning in the least amount of words.  It's not that different from trying to write an app in the least amount of code, is it?

<u>Writers Who Want to Engage with Other Writers</u> - PromptLy allows writers to engage with other writers and learn and mentor each other.  I plan to add the user authorization for writers to create accounts and the ability to click on a heart icon to show they like another writer's promptly (writing post).


<b>Library View</b>

The Library View lists all the promptlys (writing posts) in the database, which shows the author's profile picture, the title of their promptly (writing post), and the author name.

Future plans include listing the most recent promptlys first and offering the option to show 25 promptlys per page or more.


<b>About View</b>

The About View gives a short explanation of the purpose of PromptLy.


<b>Read View</b>

The Read View allows users to read their own posts and those by other authors.  Users acan revise (dit) and ript it up (delete) their own posts.  

Future plans include adding the ability for users to click on a heart icon to show they like a particular promptly (writing post).


<b>Profile Page</b>

The Profile View will allow users to view their profile information and all of their promptlys (writing posts).


<b>Write View</b>

This view allows writers to enter the URL for a profile picture, author name, title of their price, the writing prompt they used, the genre of their work (fiction, nonfiction, poetry, essay, humor, etc.) and their writing post (promptly).

Future plans include randomly pulling in a writing prompt from a database, possibly giving the option for users to choose between a written prompt and a visual prompt.  I would also like to add a timer for writers who work best by writing as fast as they can in short amount of time.


<b>Contact View</b>

The Contact View allows users to contact me via email.


<b>Resources:</b>

<u>AngularJS, Angular Cookies (user authorization), and Angular UI-Router (routing of views)

<b>Contributors:</b>

Jef Blocker


<b>Usage</b>

1. Clone this repo
2. Run `npm install` to install all necessary dependencies
3. Run ''
4. Run `gulp start` to start the server and a handful of other tasks


<b>Assets Installed By Default</b>

[Normalize CSS](https://necolas.github.io/normalize.css/)


<b>Assets Setup and ready for use</b>

[Bourbon](http://bourbon.io/)
[Neat](http://neat.bourbon.io/)
[Font Awesome](https://fortawesome.github.io/Font-Awesome/)
[Foundation 5](http://foundation.zurb.com/)


<b>How to use them?</b>

At the top of your `main.scss` file, just import any of the following:

```scss
@import "bourbon";
@import "neat";

@import "foundation";

@import "font-awesome";
```
<i>Note: You probably don't want to use BOTH Bourbon/Neat & Foundation. Just pick one.</i>


<b>NPM Tools Used</b>

[Babel](https://babeljs.io/)
[Browserify](http://browserify.org/)
[JavaScript Code Style](http://jscs.info/)
[SASS](http://sass-lang.com/)
[Mocha](https://mochajs.org/)
[Chai](http://chaijs.com/)
