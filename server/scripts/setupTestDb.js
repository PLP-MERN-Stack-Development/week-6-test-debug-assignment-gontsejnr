const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

const setupTestDb = async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
  console.log("Test database connected");
};

const teardownTestDb = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  console.log("Test database disconnected");
};

module.exports = { setupTestDb, teardownTestDb };
