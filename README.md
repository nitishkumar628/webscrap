## webscrapping with nodejs using cheerio and puppeteer

simple nodejs  REST APIs to scrap html tags from a website  <br />

##### install the project  
clone the project. Then install dependencies.  <br />

> run npm i

##### start server

> npm start

##### Note:  <br />

**Server runs by default on 5000 port.**   <br />
**override this port by creating .env and passing PORT=YOUR_PORT**   <br />


##### Rest call to scrap web url ( pass url in body of request ):   <br />
> url:  http://localhost:5000/scrap/metadata  <br />
> method: POST   <br />
body: <br />
> { <br />
>    "url": "https://www.amazon.co.uk/Regina-Blitz-Household-Towels-Total/dp/B01JS6YLQK"   <br />
> } <br />

##### Why cheerio and puppeteer ? <br />
*cheerio: It makes parsing html dom very easy and resultant code is neat and compact.* <br />
*puppeteer: Well if a website has javascipt then using axios or request modules will only fetch static content.* <br />
*So to fetch the dynamic data, puppeteer is one of the alternatives.* <br />
