const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const parseHtml = (html) => {
  const $ = cheerio.load(html);
  let metadata = {};
  $("meta").each(function () {
    let name = $(this).attr("name");
    let content = $(this).attr("content");
    if (name && content) {
      // console.log("meta >>> ", name, content);
      metadata[name] = content;
    }
  });
  metadata.images = [];
  $("img").each(function () {
    // console.log("img src >>", $(this).attr("src"));
    metadata.images.push($(this).attr("src"));
  });
  console.log("metadata === ", metadata);

  return metadata;
};

const fetchHtml = async (url) => {
  return puppeteer
    .launch()
    .then(function (browser) {
      return browser.newPage();
    })
    .then(function (page) {
      return page.goto(url).then(function () {
        return page.content();
      });
    })
    .then(function (html) {
      require("fs").writeFile(__dirname + "/htmlPage.html", html, (err) => {});
      return { html };
    })
    .catch(function (err) {
      console.log("err ---> ", err);

      return { error: err };
    });
};

const scrapMetadata = async ({ url }) => {
  let { html, error } = await fetchHtml(url);

  if (!html || error) {
    return;
  }
  let metadata = parseHtml(html);
  return metadata;
};

module.exports = {
  scrapMetadata,
};
