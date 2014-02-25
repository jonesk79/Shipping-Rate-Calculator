var Package = {
  costToShip: function() {
    
    if (this.overnight === "no" && this.location !== "international") {
       alert("Overnight: "+this.overnight+" Location: "+this.location); 
       return (this.weight*10);
     } else if (this.overnight === "no" && this.location === "international"){
       return (this.weight*10)+50;
     } else if (this.overnight === "yes" && this.location === "international"){
        return (this.weight*10)+ 120;
     } else {
        return ("ERROR");
     }   
  }
};


  // costByWeight: function() {
  //  return this.weight * 10;
  // },

  // costByLocation: function() {
  //   if (this.location === 'international') {
  //     return this.weightCost + 50;
  //   } else {
  //     return this.weightCost; 
  //   }
  // },

  // overnightCost: function() {
  //   if (this.overnight === true) {
  //     return this.locationCost + 70;
  //   } else {
  //     return this.locationCost;
  //   }
  // }

$(document).ready(function() {
  $("form#new-package").submit(function(event) {
    event.preventDefault();

    var inputtedWeight = $("input#new-weight").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedOvernight = $("input#new-overnight").val();

    var newPackage = Object.create(Package);
    newPackage.weight = parseInt(inputtedWeight);
    newPackage.location = inputtedLocation;
    newPackage.overnight = inputtedOvernight;

    var finalCost=newPackage.costToShip();

    $("ul.cost").append("<li>" + finalCost + "</li>");

  });
});
 
