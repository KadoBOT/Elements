# Elements Frontend Challenge
---
This repo contains a code challenge I've made for [Elements](https://elements.nl). The challenge was to develope a onepage website, with some mandatory elements like:
- Navigation Menu
- A Parallax Effect
- One content block with a carousel containing at least 3 items
- One content block with the relevant companies we've worked with
- One content block with a blog post and option to comment
- One content block with a contact form

#### Requirements:
- HTML5
- Responsive (mobile + desktop is sufficient)
- High dpi (“Retina”) images
- Use at least 1 web font
- Should work in all major browsers
---
## Development
This code challenge was made using create-react-app and Redux. BEM pattern was used on the CSS, and the components structure follows the Atomic Design Pattern. Also, some funcional programming using Ramda was used.

The following npm packages were used in this project:
- [React.js](https://facebook.github.io/react/)
- [Ramda](http://ramdajs.com/)
- [Redux](http://redux.js.org/)
- [create-react-app](https://github.com/facebookincubator/create-react-app)

## Instructions
### Clone repo
Clone this repository to your machine by typying this on your console:
```
git clone https://github.com/KadoBOT/Elements
```
### Install
Inside the repository folder, install the necessary packages:
```
cd Elements
npm install
```
### Start development server
To run the dev server:
```
npm start
```
### Build production
Build the project for production:
```
npm run build
```
---
### Tests
#### Tests with Enzyme and Jest  
For single test: `npm test`  
Coverage test: `npm run test -- --coverage`  

---
### Todo
- Improve Mobile View
- Test for Actions and Reducers.
- A Template page. To be able to visualize the site without the need to call the API.
