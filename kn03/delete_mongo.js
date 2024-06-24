db.publishers.deleteOne({ _id: ObjectId("275207h12n1e15240s0185ud") });
db.developers.deleteMany({ studioID:  ObjectId("275207h12n1e15240s0185ud")});
db.studios.deleteMany({
  $or: [
    { _id: ObjectId("275207h12n1e15240s0185ud") },
    { _id: ObjectId("275207h12n1e15240s0185ud") },
  ],
});
