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
    if ((this.sideA + this.sideB > this.sideC) && (this.sideB + this.sideC > this.sideA) && (this.sideA + this.sideC > this.sideB)) {    
      return true;
    } else {
      return false;
    }
  }
};


$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var inputtedSideA = $("input#new-sideA").val();
    var inputtedSideB = $("input#new-sideB").val();
    var inputtedSideC = $("input#new-sideC").val();

    var newTriangle = Object.create(Triangle);
    newTriangle.sideA = parseInt(inputtedSideA);
    newTriangle.sideB = parseInt(inputtedSideB);
    newTriangle.sideC = parseInt(inputtedSideC);

   
    if (newTriangle.valid() === false) {
      alert("This is not a valid triangle.  Please enter new sides.");
      this.reset();
        
    } else if (newTriangle.type() === "equilateral") {
       $("ul.equilateralList").append("<li><span class='triangle'>" + inputtedSideA + "," + inputtedSideB + "," + inputtedSideC + "</span></li>")
      this.reset();

    } else if (newTriangle.type() === "isosceles") {
      $("ul.isoscelesList").append("<li><span class='triangle'>" + inputtedSideA + "," + inputtedSideB + "," + inputtedSideC + "</span></li>")
      this.reset();

    } else if (newTriangle.type() === "scalene") {
      $("ul.scaleneList").append("<li><span class='triangle'>" + inputtedSideA + "," + inputtedSideB + "," + inputtedSideC + "</span></li>")
      this.reset();
    }

  });
});


 
