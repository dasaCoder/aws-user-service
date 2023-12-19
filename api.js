const axios = require('axios');

const username = 'dasaCoder'; // Replace with your GitHub username
const repo = 'dasaCoder/nippon-vesakasiri'; // Replace with the owner and repository name

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1); // Get date for yesterday

// Calculate start and end of yesterday
const sinceDate = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 0, 0, 0, 0).toISOString();
const untilDate = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 23, 59, 59, 999).toISOString();


// Fetch user's contributions
axios.get(`https://api.github.com/users/${username}/repos?since=${sinceDate}&until=${untilDate}`)
  .then(response => {
    console.log(`Contributions for ${username}: ${response.data.length} repositories`);
  })
  .catch(error => {
    console.error('Error fetching contributions:', error);
  });

// Fetch commit activity for a repository
axios.get(`https://api.github.com/users/${username}/events?since=${sinceDate}&until=${untilDate}`)
  .then(response => {
    // console.log(`Commit Activity for ${repo}:`, response.data);

    const eventCounts = {};

    response.data.forEach(event => {
      const eventType = event.type;
      if (eventCounts[eventType]) {
        eventCounts[eventType]++;
      } else {
        eventCounts[eventType] = 1;
      }
    });

    console.log(`Event counts for ${username}:`, eventCounts);
  })
  .catch(error => {
    console.error('Error fetching commit activity:', error);
  });

// Fetch pull request metrics for a repository
// axios.get(`https://api.github.com/users/${username}/pr?state=all`)
//   .then(response => {
//     console.log(`Pull Request Metrics for ${repo}: ${response.data.length} pull requests`);
//   })
//   .catch(error => {
//     console.error('Error fetching pull request metrics:', error);
//   });
