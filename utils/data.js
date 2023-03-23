const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Zhen",
  "Zubayr",
  "Zuriel",
  "Xander",
  "Jared",
  "Courtney",
  "Gillian",
  "Clark",
  "Grace",
  "Kelsey",
  "Tamar",
  "Alex",
  "Mark",
  "Farish",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const thoughts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem sed risus ultricies tristique nulla aliquet enim tortor. Vitae nunc sed velit dignissim sodales ut eu. Mi quis hendrerit dolor magna eget.",
  "Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. A condimentum vitae sapien pellentesque habitant morbi tristique.",
  "Massa sed elementum tempus egestas sed sed. Nisl tincidunt eget nullam non nisi est. Morbi tristique senectus et netus et.",
  "Sit amet luctus venenatis lectus magna fringilla urna. Porta lorem mollis aliquam ut porttitor leo a. Ut tellus elementum sagittis vitae. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.",
  "In arcu cursus euismod quis viverra nibh cras. Dolor sit amet consectetur adipiscing elit duis tristique.",
  "Quis lectus nulla at volutpat. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Nunc congue nisi vitae suscipit.",
  "Laoreet sit amet cursus sit amet. Sed id semper risus in hendrerit. Justo nec ultrices dui sapien eget mi. Sed vulputate odio ut enim blandit volutpat maecenas.",
];

const reactions = ["Wow!", "Cool", "First Post", "LOL", "Angry"];

const userObj = () => {
  const userArr = [];
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    const userEmail = `${element}@email.com`;
    userArr.push({ username: element, email: userEmail });
  }
  return userArr;
};

const reactionObj = (index) => {
  const name = names[index + 1];
  const name2 = names[index + 2];
  const reaction1 = Math.floor(Math.random() * reactions.length);
  const reaction2 = Math.floor(Math.random() * reactions.length);

  return [
    {
      reactionBody: reaction1,
      username: name,
    },
    {
      reactionBody: reaction2,
      username: name2,
    },
  ];
};

const thoughtObj = () => {
  const thoughtArr = [];
  for (let index = 0; index < thoughts.length; index++) {
    const element = thoughts[index];
    const username = names[index];
    const newThought = {
      thoughtText: element,
      username: username,
      reactions: reactionObj(index),
    };
    thoughtArr.push(newThought);
  }
  return thoughtArr;
};

module.exports = { userObj, thoughtObj };
