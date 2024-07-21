## Using ReduxToolkit to create Product item list
using json data to create a product item to Increase or Decrease the per unit Quantity that should automatically update the total Quantity.

1. Create the react folder
   - React-tasko6 
   - open this folder with vs code

2. Install Dependencies
   ````
   npm install
   ````
3. Clear the codes
    - App.js and index.css, App.css these files default codes are cleared.

4. Install Redux
   ````   
   npm install redux
   npm install react-redux
   npm install @reduxjs/toolkit
   ````
5. Create features folder
   - within this folder create [itemSlice.js](itemSlice.js) file.
   - in this file create slice method and state, reducer then export all 
   - export reducer to store.js file

6. Create app folder
   - within this folder create [store.js](store.js) file
   - in this file import the store code. it has reducer function.

7. In Main.jsx
   - [Main.jsx](Main.js) file we provide store to App.jsx file

8. In App.jsx
   - [App.jsx](App.jsx) file import all the function 
   - using dispatch method to increase and decrease quantity, remove product list.
   - display all the product details 

finally  ready our application then we push to github and depolyed in netlify  to display our application in browser.
