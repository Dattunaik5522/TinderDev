const adminAuth = (req, res, next) => {
  console.log("Checking admitn auth logic");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("UnAuthorized Request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("Checking user auth logic");
  const userToken = "xyz";
  const isUserAuthorized = userToken === "xyz";
  if (!isUserAuthorized) {
    res.status(401).send("UnAuthorized Request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
