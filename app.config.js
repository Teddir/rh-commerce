module.exports = () => {
  if (process.env.APP_ENV === "dev") {
    return require("./app.json");
  } else {
    return require("./app.json");
  }
};
