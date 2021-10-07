# The Dojo Blog From Net Ninja

This project was created by taking the net ninja react course on YouTube 

[https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d]

## What is used? 

This project uses React for the frontend and JSON Server for a super simple example backend

## How to start it up? 

First, open your favorite editor and clone the repo

You'll need two terminals open

Navigate to the project folder in your terminal and run `npm install` to download all the needed dependencies 

Then run `npm start` to get the React App running on `http://localhost:3000`

In the other terminal, you can do `npx json-server --watch data/db.json --port 8000`

That will run JSON Server on port 8000 and have it look at the db.json file in the data folder

## Styles

If you want to edit the styles, I put all of them in a styles folder and used Sass

You'll need another terminal open, and you can run `sass --watch src/styles/scss:src/styles/css`