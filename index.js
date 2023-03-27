const express = require('express');
const db = require('../../UNCC-VIRT-FSF-PT-10-2022-U-LOLC/18-NoSQL/01-Activities/28-Stu_Mini-Project/Main/config/connection');
const routes = require('../../UNCC-VIRT-FSF-PT-10-2022-U-LOLC/18-NoSQL/01-Activities/28-Stu_Mini-Project/Main/routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('/01-Activities/')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
