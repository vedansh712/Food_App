// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://vedanshsharma712:1234@cluster0.zlfwh5l.mongodb.net/HungerMERN?retryWrites=true&w=majority";
// const mongoDB = async () => {
//   mongoose.connect(mongoURI, (err, result) => {
//     if (err) {
//       console.log("---", err);
//     } else {
//       console.log("connected sucessfully");
//       const data_fatched = mongoose.connection.db.collection("food_items");
//       data_fatched.find({}).toArray(async function (err, data) {
//         const food_category = await mongoose.connection.db.collection("food_category");
//         food_category.find({}).toArray(function (err, catData) {
//           if (err) {
//             console.log("---", err);
//           } else {
//             global.food_Item = data;
//             global.foodCategory = catData;
//             // console.log(global.foodCategory)
//           }
//         });

//         // if (err) {
//         //     console.log("---", err);
//         // }

//         // else {
//         //         global.food_Item = data;
//         //         // console.log(global.food_Item)
//         // }
//       });
//     }
//   });
// };

// module.exports = mongoDB;

const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://vedanshsharma712:1234@cluster0.zlfwh5l.mongodb.net/HungerMERN?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected successfully");

    const data_fetched = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const food_category = await mongoose.connection.db.collection("food_category").find({}).toArray();

    global.food_Item = data_fetched;
    global.foodCategory = food_category;
  } catch (err) {
    console.log("---", err);
  }
};

module.exports = mongoDB;
