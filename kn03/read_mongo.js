db.publishers.find();
db.developers.find({
  $or: [
    { _id: ObjectId("275207h12n1e15240s0185ud") },
    { studioID: { $exists: true } },
  ],
});
db.studios.find({
  foundingDate: { $gte: ISODate("2023-06-01"), $lt: ISODate("2024-12-01") },
});
db.publishers.find({
  $and: [{ name: "Alpha" }, { _id: ObjectId("275207h12n1e15240s0185ud") }],
});
db.studios.find({}, { name: 1 });
db.publishers.find({}, { _id: 0, name: 1, price: 1 });
