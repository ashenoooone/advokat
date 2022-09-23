require("dotenv").config();

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    if (!token || token !== process.env.SECRET_TOKEN) {
      return res.status(401).json({ message: "Не авторизован" });
    }
    next();
  } catch (e) {
    res.status(401).json({ message: "Не авторизован" });
  }
};
