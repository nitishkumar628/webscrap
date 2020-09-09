const express = require("express");
const router = express.Router();
const ERROR_RESP = require("../errorHandle/errorResp");
const { scrapMetadata } = require("../methods/ScrapMethods");

router.post("/metadata", async (req, res) => {
  let url = req.body && req.body.url;
  // console.log("metadata route called >>",url);
  if (!url) {
    res
      .status(ERROR_RESP.MISSING_PARAMETERS.code)
      .send({ message: ERROR_RESP.MISSING_PARAMETERS.message + "url " });
  }
  try {
    let result = await scrapMetadata({ url });
    if (result) {
      return res.status(200).send({ message: result });
    } else {
      return ERROR_RESP.NOT_FOUND_FN(res);
    }
  } catch (error) {
    return ERROR_RESP.NOT_FOUND_FN(res);
  }
});

module.exports = router;
