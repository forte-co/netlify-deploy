#!/bin/env node

const child_process = require("node:child_process");
const args = process.argv.slice(2).join(" ");

child_process.exec(`./node_modules/.bin/netlify deploy --json ${args}`, (error, stdout, stderr) => {
	console.log(output);
});
