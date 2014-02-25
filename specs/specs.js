describe('Package', function() {
  describe('costByWeight', function() {
    it('returns cost to mail a package based on its weight x 10', function() {
     var testPackage = Object.create(Package);
     testPackage.weight = 10;
     testPackage.costByWeight().should.equal(100);
    });
  });

  describe('costByLocation', function() {
    it('returns cost to mail internationally if domestic is false', function() {
      var testPackage = Object.create(Package);
      testPackage.weight=3;
      testPackage.weightCost = testPackage.costByWeight();
      testPackage.location = 'international';
      testPackage.costByLocation().should.equal(80);     
    });
  });

  describe('costByLocation', function() {
    it('returns cost to mail internationally if domestic is false', function() {
      var testPackage = Object.create(Package);
      testPackage.weight=3;
      testPackage.weightCost = testPackage.costByWeight();
      testPackage.location = 'domestic';
      testPackage.costByLocation().should.equal(30);     
    });
  });

  describe('overnightCost', function() {
    it('returns the cost to mail overnight', function() {
      var testPackage = Object.create(Package);
      testPackage.weight=8;
      testPackage.weightCost = testPackage.costByWeight();
      testPackage.overnight = true;
      testPackage.location = 'international';
      testPackage.locationCost = testPackage.costByLocation();
      testPackage.overnightCost().should.equal(200);     
    });
  });
});
