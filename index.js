const inquirer = require('inquirer');
const fs=require('fs');

const questions=[
    {//Project name
        type: "input",
        message: "what is your project Name?",
        name: "Title",
        default:'Project',
      },
      {//Description
        type: "input",
        message: "Please leave a description of your project.",
        name: "Description",
        default:'project Description/Required'

      },
      {//Installation
        type: "input",
        message: "install",
        name: "npm",
        default:'project install instructions'

      },{//usage
        type: "input",
        message: "what is this program used for?",
        name: "use",
        default:'usage'

      },{// contribution guidelines
        type: "input",
        message: "how can the user run this project?",
        name: "run",
        default:'Running'

      },{//license
        type: "list",
        message: "what is the License you use?",
        name: "License",
        choice:[
            "ISC",
            "MIT",
            "USA",
            "TAIWAN",
            "Apache-2.0",
            "IPL-1.0",
            "Zlib"
        ]
      },
      {// links
        type: "input",
        message: "Developer this project Name?",
        name: "Author",
        default:'NameesMohammed'

      },{//Github
        type: "input",
        message: "what is your GitHub Account?",
        name: "github",
        default:'morganbb104'

      },
      {//Email
        type: "input",
        message: "Enter your email?",
        name: "Cheng",
        default:'hcc780921@gmail.com'

      }];


// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(answer => {
            // console.log(answer);
            return generateMarkdown(answer);
        })
        .then(data => {
            // console.log(data);
            writeFileAsync("README.md", data);
            console.log("README file created!");
            })
        .catch(err => { console.log(err) });
}

// function call to initialize program
init();