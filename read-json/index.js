// use the fetch() method to get the data from the products.json file
fetch("./src/products.json")
  /* The fetch() method returns a Promise object. So in next line we use 
  the .then() method to catch the Response object and to resolve it to 
  a javascript object with the .json() method, */
  .then(function (response) {
    return response.json();
  })
  /* The .json() method returns also a promise, so we have to use another .then() 
  method to catch our data (in our case the products). That is what we do in next line.
The products argument inside the function is holding a javascript array of products. 
  */
  .then(function (products) {
    // targeting the table-body in the html file and we storing it in the placeholder variable
    let placeholder = document.querySelector("#data-output");
    // initialize a variable named out and we are setting its value to an empty string, so we can use the out variable later in the script.
    let out = "";
    //  to loop through the products array in line 8 so we can access every product
    for (let product of products) {
      /* Inside the for loop, we use the out variable to append a table-row template which
      holds the product values. We are using a template literal (the back ticks ``) to write the html code */
      
            /* insert in the html code, javascript variables using this structure ${product.image}
            {} -> provide escape into js inside html */
      out += ` 
            <tr>
              <td>${product.name}</td>
              <td>${product.image}</td>
              <td>${product.price}</td>
              <td>${product.inventory}</td>
              <td>${product.productCode}</td>
            </tr>              
    `;
    }
    // last thing we have to do is to target the tbody element and add the data that the out variable holds. 
    placeholder.innerHTML = out;
  });
