// Buggy Async Node.js script
const axios = require('axios');

async function getUserData(userId) {
    try {
        console.log(`Fetching data for User ID: ${userId}...`);
        
        // FIX: Added missing 'await' keyword here to resolve response promise
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // FIX: Fixed namee typo to correctly access res.data.name
        console.log(`User Name: ${res.data.name}`);
        console.log(`User Email: ${res.data.email}`);
        
    } catch (error) {
        // FIX: ReferenceError - using the correct 'error' variable instead of 'err'
        console.error("Failed to fetch user:", error.message); 
    }
}

function main() {
    // Fetch information for first 3 users
    for (let i = 1; i <= 3; i++) {
        getUserData(i);
    }
}

main();
