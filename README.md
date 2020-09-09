# webscrapping with nodejs using cheerio and puppeteer

simple nodejs  REST APIs to scrap html tags from a website

### install the project
clone the project. Then install dependencies.

> run npm i

### start server

> npm start

### Note:
**Server runs by default on 5000 port. 
override this port by creating .env and passing PORT=YOUR_PORT **


### Rest call to scrap web url ( pass url in body of request ):

> http://localhost:5000/scrap/metadata
> method: POST
body: 
> {
>    "url": "https://www.amazon.co.uk/Regina-Blitz-Household-Towels-Total/dp/B01JS6YLQK"
> }

### Why cheerio and puppeteer ?
*cheerio: It makes parsing html dom very easy and resultant code is neat and compact.
*puppeteer: Well if a website has javascipt then using axios or request modules will only fetch static content.
So to fetch the dynamic data, puppeteer is one of the alternatives.
