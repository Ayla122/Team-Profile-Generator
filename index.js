//link to html page
const generateHTML = require('./src/generateHTML');

//team profiles 
const Manager = require ('./lib/Manager');
const Engineers = require ('./lib/Engineers');
const Interns = require ('./lib/interns');

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 
