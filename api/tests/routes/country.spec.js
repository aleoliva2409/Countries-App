/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { conn } = require('../../src/db.js');

const agent = session(app);

describe('Country routes', () => {
  before(() =>
    conn.sync({ force: true })
    .then(() => {
      conn.authenticate()
      console.log("Conection successful");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200).expect(res => {
        expect(res.body).to.have.length(250)
      })
    );
  });
  describe('GET /countries/:idCountry', () => {
    it('should get 404 and a msg', () => 
      agent.get('/countries/AFA').expect(404).expect(res => {
        expect(res.body).to.deep.eql({
          msg: "country code not found",
        });
      })
    )
  })
  describe("GET /countries/:idCountry", () => {
    it("should get 200 and a country", () =>
      agent
        .get("/countries/ARG")
        .expect(200)
        .expect((res) => {
          expect(res.body).to.deep.eql({
            id: "ARG",
            name: "Argentina",
            image: "https://restcountries.eu/data/arg.svg",
            continent: "Americas",
            capital: "Buenos Aires",
            subregion: "South America",
            area: "2780400km2",
            population: 43590400,
          });
        }));
  });
  describe("POST /activity", () => {
    it("should get 201 and a country created", () =>
      agent
        .post("/activity")
        .send({
          name: "skate",
          difficulty: 3,
          duration: 42,
          season: "spring",
          countries: ["ALA", "AND", "COL"],
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).to.deep.eql({ msg: "Activity created successfully" });
        }));
  });
  describe("GET /countries?name=german", () => {
    it("should get 200 and a country details", () =>
      agent
        .get("/countries?name=german")
        .expect(200)
        .expect((res) => {
          expect(res.body).to.have.length(1);
        }));
  });
  describe("GET /countries?name=wwwww", () => {
    it("should get 404 and all countries", () =>
      agent
        .get("/countries?name=wwwwww")
        .expect(404)
        .expect((res) => {
          expect(res.body).to.deep.eql({
            msg: "country not found"
          });
        }));
  });
});
