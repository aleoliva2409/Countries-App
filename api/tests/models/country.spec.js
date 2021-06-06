const { Activity , Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    before(() =>
      conn
        .sync({ force: true })
        .then(() => {
          conn.authenticate();
          console.log("Conection successful");
        })
        .catch((err) => {
          console.error("Unable to connect to the database:", err);
        })
    );
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
    describe('create activities', () => {
      it('should it works when we create activities' , () => {
        Activity.create({
          name: "skate",
          difficulty: 3,
          duration: 42,
          season: "spring"
        })
        .then(() => console.log("created successfully"))
        .catch(err => console.error(err))
      })
      it("it shouldn't work when we create activities", () => {
        Activity.create({
          name: "skate",
          difficulty: 3,
          duration: 42,
          season: "otoño",
        })
          .then(() => console.log("created successfully"))
          .catch((err) => console.error(err));
      });
    })
  });
});
