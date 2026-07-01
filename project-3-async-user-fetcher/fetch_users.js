// Buggy Async Node.js script
const axios = require('axios');

async function getUserData(userId) {
    try {
        console.log(`Fetching data for User ID: ${userId}...`);
        
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        console.log(`User Name: ${res.data.name}`);
        console.log(`User Email: ${res.data.email}`);
        
    } catch (error) {
        console.error("Failed to fetch user:", error.message); 
    }
}

async function main() {
    // Fetch information for first 3 users
    for (let i = 1; i <= 3; i++) {
        await getUserData(i);
    }
}

main();