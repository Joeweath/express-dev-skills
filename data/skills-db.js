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
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills);
    // deal with errors
  } catch (error) {
    console.log(error);
    callback(error, []);
  }
};
const findById = (id, callback) => {
  try {
    const skill = skills.find((skill) => skill._id === parseInt(id));
    if (!skill) throw new Error("No skill was found");
    return callback(null, skill);
  } catch (error) {
    console.log(error);
    return callback(error, null);
  }
};

function create(skill, callback) {
  // Add the id
  skill._id = Date.now() % 1000000;
  // New skills wouldn't be done
  skill.enjoy = false;
  skills.push(skill);
  return callback(null, skill);
}

function findByIdAndDelete(id, callback) {
  try {
    // Find the index based on the _id of the skill object
    const idx = skills.findIndex((skill) => skill._id == parseInt(id));
    const deletedskill = skills.splice(idx, 1);
    if (!deletedskill.length) throw new Error("No skill was deleted");
    return callback(null, deletedskill[0]);
  } catch (error) {
    return callback(error, null);
  }
}

export { find, findById, create, findByIdAndDelete };
