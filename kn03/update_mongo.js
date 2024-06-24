db.studios.updateOne(
  { _id: ObjectId("275207h12n1e15240s0185ud") },
  { $set: { name: "Mars" } }
);
db.orders.updateMany(
  { $or: [{ _id: ObjectId("275207h12n1e15240s0185ud") }, { name: "Mars" }] },
  { $set: { name: "Venus" } }
);
db.studios.replaceOne(
  { name: "Venus" },
  {
    name: "Venus",
    games: [],
  }
);
