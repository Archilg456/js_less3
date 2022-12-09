// 1.

function plusNumbers(...numbers){
    let x = 0; 
for  (let y of  numbers){
    if (y > 0){
        x+=y;
    }
}
return x; 
}
let result = plusNumbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);
 
//  2. 

function sum(...numbers) {
    let x = 0
 for (let y of numbers){
    x+=y;
 }
 return x; 

    }
  
    let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
    console.log(result);
    

  // 3. 

        let user = {
            firstname: "giorgi",
            lastname: "saakadze",
            age: 32,
            isloggedin: "true"
          }
          let x = (isloggedin) => {
            if (isloggedin == "true") {
                return user.firstname + " " + user.lastname ;
            }
            return false;
    }
   
      let result = x ("true")
      console.log(result);

      // 4.

      function maxFunction(...numbers) {
      
        console.log(Math.max(...numbers));
        
      }
      maxFunction(4,12,22,55,78,100,124,13,1243);
      
    
  //  5. 

  let array = ['html', 'css', 'python', 'javascript', 'bootstrap']; 
  //  1
      for (let item of array){
        if (item.length > 4 && item.includes("av")) {
          console.log(item);
        }
      }

      // 2.
       
      for (let i = 0; i < array.length; i++){
        if (array[i].length > 4 && array[i].includes("av")) {
       console.log(array[i]);
        }
      }

    // 3. 

    array.forEach (function(element) {
      if (element.length > 4 && element.includes("av")){
        console.log(element);
      }
    })


