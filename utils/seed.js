const connection = require("../config/connector");
const { User, Thought } = require("../models");
const { userObj, thoughtObj } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = userObj();
  const thoughts = thoughtObj();

  await User.insertMany(users);
  await Thought.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Database Successfully Seeded! 🌱");
  process.exit(0);
});
