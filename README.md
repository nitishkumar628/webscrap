# webscrap
simple nodejs  REST APIs to scrap html tags from a website

# Install and run
clone the project
run npm i

#To start server
npm start

#Server runs by default on 5000 port.
# override this port by creating .env and passing PORT=YOUR_PORT

Rest call to scrap web url ( pass url in body of request ):
http://localhost:5000/scrap/metadata
body: 
{
    "url": "https://www.amazon.co.uk/Regina-Blitz-Household-Towels-Total/dp/B01JS6YLQK"
}
