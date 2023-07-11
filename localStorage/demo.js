//  an object assigned to a variable named product
let product = {
  "product-name": "microphone x series",
  price: "69.90",
  image: "mic.png",
  color: ["blue", "red", "black"]
};
/* In order to save objects, or arrays, in the local storage, we have
to convert them in a JSON string. And for that we use the .stringify() method of the JSON Object.
*/
let encodedProduct = JSON.stringify(product);
//use the .setItem() method and we store the encodedProduct with a key of "product" in the local storage
localStorage.setItem("product", encodedProduct);

//fetch the stored object from the local storage.
/* fetching the "product" with the .getItem() method and store it in the variable localData.
But as we know the localData variable holds now a JSON string. */

let localData = localStorage.getItem("product");
//using the .parse() method to decode the JSON string back to a javascript object
let decodedData = JSON.parse(localData);
// log decoded data
console.log(decodedData);

/*

Summary
The localStorage object is part of the Web Storage API.
A website can not access an others website's stored data in the local storage.
We can store at least 5MB of data.
The localstorage object has properties and methods that we can use to store, remove, and fetch data stored in the browser.
.setItem() ... stores the data.
.getItem() ... fetch the stored key, value pair (record).
.removeItem() ... removes a stored record.
.clear() ... clears all the stored data in the active domain.
.length ... return us the number of the records 
*/
