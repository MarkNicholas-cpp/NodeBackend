const express = require("express");
const Result = require("../Database");
const Mapping = require("./Operations");
const Router = express.Router();
Router.get("/", function (req, res) {
  res.send("Hello");
});
Router.get("/Students", (req, res) => {
  const sql = `SELECT * FROM Students`;
  Result(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.get("/Teachers", (req, res) => {
    const sql = `SELECT * FROM Teacher`;
    Result(sql)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
module.exports = Router;
