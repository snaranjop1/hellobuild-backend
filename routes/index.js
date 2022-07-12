var express = require("express");
var axios = require("axios");
var router = express.Router();

router.get("/token/:code", async function (req, res, next) {
  const result = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: "Iv1.83813ee09b892450",
      client_secret: "b5d5f6251f5b8c5e59389fc9da3eee490003593a",
      code: req.params.code,
    },
    { headers: { accept: "application/json" } }
  );

  res.send(result.data.access_token);
});

module.exports = router;
