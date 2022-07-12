var express = require("express");
var axios = require("axios");
var router = express.Router();

router.get("/token/:code", async function (req, res, next) {
  const result = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: req.params.code,
    },
    { headers: { accept: "application/json" } }
  );

  res.send({ token: result.data.access_token });
});

module.exports = router;
