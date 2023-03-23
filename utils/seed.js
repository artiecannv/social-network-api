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

  const userArray = await User.find();
  const thoughtArray = await Thought.find();
  let counter = 0

  for (let i = 0; i < userArray.length; i++) {
    let element;
    if (i === userArray.length) {
      element = userArray[i - 1];
    } else {
      element = userArray[i + 1];
    }

    const elementArray = [element];
    // await User.findOneAndUpdate(
    //   { username: userArray[i].username },
    //   { friends: elementArray }
    // );
    console.log(element)
    console.log(counter++)
  }

  console.table(users);
  console.table(thoughts);
  console.info("Database Successfully Seeded! 🌱");
  process.exit(0);
});
