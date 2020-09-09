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
    imageUrl = $(this).attr("src");
    if (!metadata.images.includes(imageUrl)) {
      metadata.images.push(imageUrl);
    }
  });
  // console.log("metadata === ", metadata);

  return metadata;
};

const fetchHtml = async (url) => {
  try {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url);
    let html = await page.content();
    html = html && html.toString();
    // console.log("html -- ", typeof html);
    browser.close();

    // use this to write entire html + js  data to a file
    // and then use it again and again instead of making repeated network calls with puppeteer
    // when you require the html file make sure to convert to string
    // require("fs").writeFile(__dirname + "/htmlPage.html", html, (err) => {});

    return { html };
  } catch (err) {
    console.log("err ---> ", err);

    return { error: err };
  }
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
