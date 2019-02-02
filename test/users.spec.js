process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");

const app = require("../server");

const should = chai.should();

chai.use(chaiHttp);

describe("User Methods", () => {
  describe("GET method of users", () => {
    it("should get all users", done => {
      chai
        .request(app)
        .get("/api/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
      
    });
  });
});
