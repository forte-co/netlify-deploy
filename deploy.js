#!/bin/env node

const child_process = require("node:child_process");
const args = process.argv[2]
	.split(",")
	.map(element => {
		if (element.includes("production=")) {
			return element === "production=true" ? ["--prod"] : [];
		} else {
			const command = element.split("=");
			return [`--${command[0]}`, command[1]];
		}
	})
	.flat();

child_process.execFile(
	"./node_modules/.bin/netlify",
	["deploy", "--json", ...args],
	(error, stdout, stderr) => {
		if (error) {
			console.log(error);
		} else if (stdout) {
			console.log(stdout);
		} else {
			console.log(stderr);
		}
	}
);
