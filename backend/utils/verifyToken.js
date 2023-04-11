const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.send({ msg: "you are not authenticated" });
  } else {
    jwt.verify(token, process.env.JWT, (err, res) => {
      if (err) {
        res.send({ msg: "token is not valid" });
      } else {
        // res.send(res);
        next();
      }
    });
  }
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.findUser.id === req.params.id || req.findUser.isAdmin) {
      next();
    } else {
      res.send("something went worng");
    }
  });
};

module.exports = {
  verifyToken,
};
