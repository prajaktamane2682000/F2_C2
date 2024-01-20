let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    for (let employee of arr) {
      if (employee.profession === "developer") {
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Age: ${employee.age}`);
      }
    }
  }

  function addData() {
    // New employee object to append
let  newEmployee ={ id: 4, name: "susan", age: "20", profession: "intern" };
arr.push(newEmployee);
console.log(arr);


  }
  
  const additionalEmployees = [
    { id: 5, name: "michael", age: "25", profession: "manager" },
    { id: 6, name: "emma", age: "22", profession: "developer" },
    { id: 7, name: "alex", age: "24", profession: "admin" }
  ];
  
  // Concatenate the arrays
  

  function removeAdmin() {
    //Write your code here, just console.log
    const filteredEmployees = arr.filter(employee => employee.profession !== "admin");
    console.log(filteredEmployees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const combinedEmployees = arr.concat(additionalEmployees);
  console.log(combinedEmployees);
  
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }