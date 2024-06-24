var publisher1 = new ObjectId();
var publisher2 = new ObjectId();
var publisher3 = new ObjectId();

db.publishers.insertMany([
  {
    _id: publisher1,
    name: "Alpha",
  },
  {
    _id: publisher2,
    name: "Beta",
  },
  {
    _id: publisher3,
    name: "Gamma",
  },
]);

var studio1 = new ObjectId();
var studio2 = new ObjectId();
var studio3 = new ObjectId();

db.studios.insertMany([
  {
    _id: studio1,
    name: "Sol",
    Games: [
      {
        name: "game1",
        developerIDs: [developer1, developer2],
        publisherID: publisher1,
      },
      {
        name: "game2",
        developerIDs: [developer1, developer2],
        publisherID: publisher1,
      },
    ],
  },
  {
    _id: studio1,
    name: "Luna",
    Games: [
      {
        name: "game3",
        developerIDs: [developer3, developer4],
        publisherID: publisher2,
      },
      {
        name: "game4",
        developerIDs: [developer3, developer4],
        publisherID: publisher2,
      },
    ],
  },
  {
    _id: studio1,
    name: "Terra",
    Games: [
      {
        name: "game5",
        developerIDs: [developer5, developer6],
        publisherID: publisher3,
      },
      {
        name: "game6",
        developerIDs: [developer5, developer6],
        publisherID: publisher3,
      },
    ],
  },
]);

var developer1 = new ObjectId();
var developer2 = new ObjectId();
var developer3 = new ObjectId();
var developer4 = new ObjectId();
var developer5 = new ObjectId();
var developer6 = new ObjectId();

db.developers.insertOne({
  _id: developer1,
  studioID: studio1,
});

db.developers.insertOne({
  _id: developer2,
  studioID: studio1,
});

db.developers.insertOne({
  _id: developer3,
  studioID: studio2,
});

db.developers.insertOne({
  _id: developer4,
  studioID: studio2,
});

db.developers.insertOne({
  _id: developer5,
  studioID: studio3,
});

db.developers.insertOne({
  _id: developer6,
  studioID: studio3,
});
