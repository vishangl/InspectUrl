import validator from 'validator';
import chalk from 'chalk';
import fs from 'fs';
import { URL } from 'url';

let u = process.argv[2];
if (u == undefined) {
    console.log(chalk.red('Please Enter a URL.'));
    process.exit(1);
}

// Function to check if the URL is blocked
function isBlock(x) {
    let bURLs = fs.readFileSync('./BlockedURL.txt', 'utf-8').split('\n');
    return bURLs.some((i) => i.trim() === x);
}

// Predefined search parameters
const predefinedParams = {
    name: "VishangLad",
    age: "23",
    role: "Web developer"
};

if (validator.isURL(u)) {
    if (!isBlock(u)) {
        try {
            const parsedUrl = new URL(u);

            // Add predefined search parameters to the URL
            for (const [key, value] of Object.entries(predefinedParams)) {
                parsedUrl.searchParams.set(key, value);
            }

            console.log(chalk.greenBright('URL is valid.'));
            console.log(chalk.blueBright('Final URL with parameters:'), parsedUrl.href);

            // Extract and log the search parameters
            const searchParams = {};
            parsedUrl.searchParams.forEach((value, key) => {
                searchParams[key] = value;
            });

            console.log(chalk.blueBright('Search Parameters:'), searchParams);

            // Append the final URL to the file
            fs.appendFileSync('./url.txt', `${parsedUrl.href}\n`);
        } catch (error) {
            console.log(chalk.redBright('Error parsing the URL.'));
        }
    } else {
        console.log(chalk.blackBright.bgRedBright('Blocked URL'));
    }
} else {
    console.log(chalk.redBright(`${u} is not a valid URL.`));
}
