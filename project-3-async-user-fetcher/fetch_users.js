// Buggy Async Node.js script
const axios = require('axios');

async function getUserData(userId) {
    try {
        console.log(`Fetching data for User ID: ${userId}...`);
        
        // BUG 1: Missing 'await' keyword here, which makes res a Promise instead of response
        const res = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // BUG 2: Trying to access property on Promise directly instead of awaiting it
        // and a typo in property name: 'res.data.namee' instead of 'res.data.name'
        console.log(`User Name: ${res.data.namee}`);
        console.log(`User Email: ${res.data.email}`);
        
    } catch (error) {
        // BUG 3: Syntax/Reference Error - error variable is shadowed or misspelled
        console.error("Failed to fetch user:", err.message); 
    }
}

function main() {
    // Fetch information for first 3 users
    for (let i = 1; i <= 3; i++) {
        // BUG 4: Calling asynchronous function inside loop without await/sequential control, 
        // leading to out-of-order logs or unhandled rejections
        getUserData(i);
    }
}

main();
