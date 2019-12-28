const inquirer = require("Inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
var pdf = require("html-pdf");
var html = fs.readFileSync('index.html', 'utf8');
var options = { format: 'Letter' };


const readFileAsync = util.promisify(fs.readFile);

class Profile {
    constructor(){
        this.name = "Profile";
    }
    askForInfo() {
        return inquirer
        .prompt([
            {
                message: "Enter your GitHub username:",
                name: "username",    
            }
        ])
    }
}