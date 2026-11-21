import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;

const url = "http://localhost:3000";
var id = "";

describe("crear validacion", () => {
 it("Deberia crear validacion", done => {
  chai
   .request(url)
   .post("/validations")
   .send({
    nombre: "minombre",
    numeroDocumento: "234570",
   })
   .end((err, res) => {
    expect(res).to.have.status(201);
    expect(res).to.have.a("object");
    expect(res.body).to.have.property("id");
    id = res.body.id;
    done();
   });
 }).timeout(5000);

 it("Deberia indicar que falta el numero de documento", done => {
  chai
   .request(url)
   .post("/validations")
   .send({
    nombre: "minombre",
   })
   .end((err, res) => {
    expect(res).to.have.status(400);
    expect(res).to.have.a("object");
    expect(res.body).to.have.property("error");
    expect(res.body.error).to.equal("El numero de documento es obligatorio");
    done();
   });
 }).timeout(5000);

 it("Deberia traer la validacion con id", done => {
  console.log("id", id);
  chai
   .request(url)
   .get(`/validations/${id}`)
   .end((err, res) => {
    expect(res).to.have.status(200);
    expect(res).to.have.a("object");
    expect(res.body).to.have.property("nombre");
    expect(res.body).to.have.property("numeroDocumento");
    done();
   });
 }).timeout(5000);
});
