const skills = [
  { text: "Debugging", enjoy: false, _id: 123771 },
  { text: "Teamwork", enjoy: true, _id: 134883 },
  { text: "Writing Code", enjoy: true, _id: 188234 },
];

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)) {
      throw new TypeError("Please pass in an object");
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills);
    // deal with errors
  } catch (error) {
    console.log(error);
    callback(error, []);
  }
};

export { find };
