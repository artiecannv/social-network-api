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

  for (let i = 0; i < userArray.length; i++) {
    let element;
    if (i === userArray.length - 1) {
      element = userArray[i - 1];
    } else {
      element = userArray[i + 1];
    }

    const elementArray = [element._id];
    await User.findOneAndUpdate(
      { username: userArray[i].username },
      { friends: elementArray }
    );
  }

  for (let i = 0; i < thoughtArray.length; i++) {
    const element = [thoughtArray[i]._id];

    console.log(thoughtArray[i])

    await User.findOneAndUpdate(
      { username: thoughtArray[i].username },
      { thoughts: element }
    );
  }

  console.table(users);
  console.table(thoughts);
  console.info("Database Successfully Seeded! 🌱");
  process.exit(0);
});
