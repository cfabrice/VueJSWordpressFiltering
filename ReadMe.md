# Wordpress API - VUE.js filtering V.0.1 - ReadMe File
Last edited: July 20 2017 - Dillan Simmons :robot:


## Purpose

This is a test project to measure feasibility of using VUE.js to pull from the Wordpress API 

Gulp is used in this template to:

* Compile our SASS file into CSS.
* Compress our CSS and JS files to improve load time.
* Gives us a server and the ability for live reload edits at: `http://localhost:8080/`

## Setup and Installation

You will need the following tools installed in order to complete the setup (install notes are for Mac).

- [Node.js](http://nodejs.org) - If you are on a Mac install Node with [Homebrew](http://brew.sh/) (`brew install node`).
- [Gulp.js](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) - For workflow automation

## Base File Structure

-Folders are **bolded**

* **CSS**
	+ (main.scss) is the main CSS file you should edit. It will compile down into dist/css/min/style.css
* **DIST**
	+ **JS** 
		+ (all.js) all of your JS concatenated. (pushes to final folder)
		+ (all.min.js) all of your  JS concatenated **and** minified. (pushes to final folder)
	+ **CSS**
		+ (main.css) all of your SASS compiled into CSS.
		+ **MIN**
			+ (style.css) all of you SASS compiled into CSS **and** minified. 
* gulpfile.js - this is the gulp file that will handle all your minification, compiling, and live updates.
* **IMG** - this will contain your minified image files. (pushes to final folder)
* index.html - this is the main HTML file for your landing page. (pushes to final folder)
* **JS** - This contains your Javascript files they will compile down into dist/js/all.min.js 
	+ Vendor - This contains all of your vendor specific JS. Like JQuery, bootstrap.js, etc...
* node_modules - Contains your node packages **Ignore this file**.
* package.json - **Update this file with project information!**
* ReadMe.md - You are reading this file now! 

## Common Problems
1. Gulp will not run
	* Check to see what the error message is, it could be an issue in your JS or SASS file
	* Check to make sure you have gulp installed on your computer by typing `gulp -v` in terminal. If the terminal produces an error you'll need to install gulp. You can do so by entering `npm install -g gulp` into terminal and then following the normal To Use steps above. If you don't have node or npm installed there are steps to install those [here](https://travismaynard.com/writing/getting-started-with-gulp).
	* If you are getting this error `Error: listen EADDRINUSE :::8080` you likely have gulp running in a different folder already. Ensure Gulp isn't running elsewhere and try again. 

