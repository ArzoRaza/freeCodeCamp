// Problem 1: Extend Array Prototype
// Add a method to the Array prototype that calculates the average of all numbers in an array.


// __________________________________________ this methods _____________________________________
// Array.prototype.average = function () {
//     let sum = 0;
    
//     for(let i = 0; i < this.length; i++){
//         sum += this[i];
//     }
//     return sum / this.length;
// }

// let numbers = [12, 23, 55, 70, 80, 90];

// let sumAvg = numbers.average();
// console.log(sumAvg);

// ______________________________________ Reduce methods ___________________________________-
// Array.prototype.average = function() {
//     return this.reduce((sum, num) => sum + num, 0) / this.length;
// }


// let findNumberAverage = [33, 22, 55, 23, 55, 90];

// console.log(findNumberAverage.average());



// ____________________________________ map ______________________________________
// Array.prototype.myMap = function(callback) {
//     // Create a new array to store results
//     const result = new Array(this.length);
    
//     // Loop through each element in the original array
//     for (let i = 0; i < this.length; i++) {
//       // Call the callback function with (currentValue, index, array)
//       // and store the returned value in the new array
//       result[i] = callback(this[i], i, this);
//     }
    
//     // Return the new array with transformed values
//     return result;
//   };

//   let newArr = [33, 22, 55, 23, 55, 90];

//   console.log(newArr.myMap());
  


// _________________________________  creating cunstructor function

function robot(name, batteryLevel){
    this.name = name;
    this.batteryLevel = batteryLevel;


    robot.prototype.charge = function() {
        this.batteryLevel += 20;
        if(batteryLevel > 100){
            this.batteryLevel = 100; 
        }
    }
}

