var Triangle = {
  type: function() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return "equilateral";
   } else if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) {
      return "isosceles";
   } else if (this.sideA + this.sideB > this.sideC && this.sideB + this.sideC > this.sideA && this.sideA + this.sideC > this.sideB) {
      return "scalene";
   }
  },

  valid: function() {
    if ((this.sideA + this.sideB > this.sideC) || (this.sideB + this.sideC > this.sideA) || (this.sideA + this.sideC > this.sideB)) {
      return true;
    }
  }
};


// var triangle = function(a,b,c) {
//   if (a===b && b===c) {
//     return "equilateral";
//   } else if (a===b || a===c || b===c) {
//     return "isosceles";
//   } else if ()

//   else {
//     return "We haven't figured it out yet.";
//   } 
// }


 
