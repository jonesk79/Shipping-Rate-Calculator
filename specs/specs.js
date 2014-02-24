describe('Triangle', function() {
  describe('type', function() {
    it("compares 3 equal sides and returns 'equilateral'",function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 4;
      testTriangle.sideB = 4;
      testTriangle.sideC = 4;
      testTriangle.type().should.equal("equilateral");
    });

    it("checks to see if two out of three sides are equal and return isosceles", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 3;
      testTriangle.sideB = 5;
      testTriangle.sideC = 5;
      testTriangle.type().should.equal("isosceles");
    });

    it("returns scalene for a triangle with no matching sides", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 2;
      testTriangle.sideB = 3;
      testTriangle.sideC = 4;
      testTriangle.type().should.equal("scalene");
    });
  });
  describe('valid', function() {
    it("returns false for a set of sides that does not make a triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 10;
      testTriangle.sideB = 3;
      testTriangle.sideC = 4;
      testTriangle.valid().should.equal(false);
    });
  });
});

  // it('returns equilateral when all sides are the same', function() {
  //   triangle(4,4,4).should.equal('equilateral');
  // });

  // it('returns isosceles when 2 sides are the same', function() {
  //   triangle(3,5,5).should.equal('isosceles');
  // });

  // it("returns scalene when no sides are the same", function() {
  //   triangle(2,3,4).should.equal("scalene");
  // });

