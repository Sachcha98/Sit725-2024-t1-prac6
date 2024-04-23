const { expect } = require("chai");
const request = require("request");

let url = "http://localhost:3000/api/cat";

let cat = { name: "test cat" };

describe("This is a GET method", function () {
  it("it_GET_Method", function (done) {
    request(url, function (a, b, c) {
      console.log(arguments);

      let responseObj = JSON.parse(c);

      expect(responseObj).to.be.an("object_01");

      done();
    });
  });
});

describe("This is a POST method", function () {
  it("Test_POST_Method", function (done) {
    request.post({ url: url, form: cat }, function (a, b, c) {
      let responseObj = JSON.parse(c);
      expect(responseObj).to.be.an("object_01");
      console.log(arguments);
      console.log(1);

      done();
    });
  });
});