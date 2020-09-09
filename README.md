# webscrapping with nodejs using cheerio and puppeteer

simple nodejs  REST APIs to scrap html tags from a website

### install the project
clone the project. Then install dependencies.

> run npm i

### start server

> npm start

### Note:

** Server runs by default on 5000 port. ** \n
** override this port by creating .env and passing PORT=YOUR_PORT **


### Rest call to scrap web url ( pass url in body of request ):

> url:  http://localhost:5000/scrap/metadata \n
> method: POST \n
body:  \n
> { \n
>    "url": "https://www.amazon.co.uk/Regina-Blitz-Household-Towels-Total/dp/B01JS6YLQK" \n 
> } \n

### Why cheerio and puppeteer ? \n
*cheerio: It makes parsing html dom very easy and resultant code is neat and compact. \n
*puppeteer: Well if a website has javascipt then using axios or request modules will only fetch static content. \n
So to fetch the dynamic data, puppeteer is one of the alternatives. \n
