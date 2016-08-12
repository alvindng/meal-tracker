# _Meal Tracker_

#### _Individual JavaScript Epicodus exercise - JavaScript week 2, 8.12.16._

#### By _**Alvin Ng**_

## Description
**Meal Tracker**

Website showcasing everything I learned in Epicodus week 2 of JavaScript. This application is to incorporate all the concepts taught this week by creating a meal tracking application. Users should be able to log foods they've eaten each day, including details about the meal and its number of calories. You may assume foods being logged are for a single day (you are not required to keep track of multiple days' meals).

As a user…

* I want to log a food I have eaten by submitting a form with food name, calories and details.
* I want to view a list of foods I have logged.
* I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
* I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were 100 calories instead of 365).

## Setup/Installation Requirements

Installation
------------

First clone the repository.  
```
$ git clone https://github.com/alvindng/meal-tracker
```

Remove the git remote url from the local repository.  
```
$ git remote remove origin
```

Install required packages via npm and bower:
```
$ npm install
$ bower install
```

Also install any globally required packages via npm (if applicable):
```
$ npm install gulp -g
$ npm install bower -g
$ gem install sass
$ npm install typescript -g
$ apm install atom-typescript
```

Run the gulp build task in the terminal in the repository folder:
```
$ gulp build
```

Run the gulp serve task in the terminal in the repository folder:
```
$ gulp serve
```

Your browser should open the webpage automatically. If it doesn't, open your browser and go to `localhost:3000`.

License
-------

MIT License. Copyright &copy; 2016
