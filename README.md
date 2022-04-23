## Brochure Website

A website I built for a local posting & printing company, which I have overseen over the course of a year since it’s creation. I took the approach of using a CSS framework, Bootstrap, to create a professional website design, and vanilla JavaScript for the functionality.

## Lessons Learned

I thoroughly enjoyed the process of building this website, and was my first opportunity to use Bootstrap. Using a CSS framework made the process of adding responsiveness to the website much easier and less time consuming. It wasn’t without it’s faults and I compensated for some poor design implementations by applying custom CSS.

Smooth scrolling when clicking on a navigation bar link was applied using vanilla JavaScript. This was a fun feature to include and the result works exactly how I intended.

I also used the AOS library, which allows the webpages contents to appear when scrolled to that part of the page. The application of the library was extremely easy and its addition keeps users engaged.

The website still requires a payment feature to be included. I have limited knowledge of this, apart from Stripe being a popular payment processor used by many online businesses. I intend on reading into this further so I have a better understanding of its implementation.

## Future Updates

• Adding a payment system with Stripe.

• Including the business location in the contact section, using the Google Maps API to showcase this.

## Deployment

Website was deployed with Netlify.

## Get started

From your command line, first clone this repo:

# Clone this repository

$ git clone https://github.com/rgneville/material-ui-site

# Go into the repository

$ cd material-ui-site

# Remove current origin repository

$ git remote remove origin
Then you can install the dependencies using NPM:

Using NPM:

# Install dependencies

$ npm install

# Start development server

$ npm start
You should now have a development server running in your default browser.

yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
