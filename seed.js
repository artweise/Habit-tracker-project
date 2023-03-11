const mongoose = require("mongoose");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connection Established 1️⃣✅");
    return Habit.create(habitList);
  })
  .then(() => {
    console.log("DB Updated 2️⃣🌀");
    console.log("Connection closed 3️⃣❌");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log("Error while seeding DB: " + error);
  });
