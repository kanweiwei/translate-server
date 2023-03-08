const path = require("path");
const md5 = require("md5");
const axios = require("axios").default;
const bodyParser = require("body-parser");
const express = require("express");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/translate", async (req, res) => {
  console.log(req.body);
  const { from, to, q } = req.body;

  const salt = Math.random(0, 1).toString(16).substring(3);
  const str1 = `${process.env.t_appid}${q}${salt}${process.env.t_secret}`;
  const sign = md5(str1);

  const re = await axios.get(
    "https://fanyi-api.baidu.com/api/trans/vip/translate?" +
      require("qs").stringify({
        q: q,
        from,
        to,
        appid: process.env.t_appid,
        secret: process.env.t_secret,
        salt,
        sign,
      })
  );
  res.json(re.data);
});

require("http")
  .createServer(app)
  .listen(4000, () => {
    console.log("server is running");
  });
