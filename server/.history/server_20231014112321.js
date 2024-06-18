const express = require("express");
const app = express();
const connection = require("./connection");
const OwnerRegModel = require("./models/OwnerRegandLogin");
const cors = require("cors");

const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const RoomDetailsModel = require("./models/RoomDetails");
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/owner/register/", (req, res) => {
  const { username, email, number, password } = req.body;

  OwnerRegModel.create({ username, email, number, password }).then(
    (result, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json({ success: "Success" });
      }
    }
  );
});

app.post("/owner/login/", (req, res) => {
  const { email, password } = req.body;

  OwnerRegModel.find({ email }).then((result, err) => {
    if (result[0].password == password) {
      res.json({ successMsg: "success", username: result[0].username });
    } else {
      res.json({ failMsg: "fail" });
    }
  });
});

app.post("/owner/create-room/", (req, res) => {
  const {
    roomid,
    username,
    roomname,
    roomsize,
    numberofbeds,
    minimumbookingperiod,
    maximumbookingperiod,
    amountperday,
    images,
  } = req.body;

  RoomDetailsModel.create({
    roomid,
    username,
    roomname,
    roomsize,
    numberofbeds,
    minimumbookingperiod,
    maximumbookingperiod,
    rateperday: amountperday,
    images,
  }).then((result, err) => {
    res.json({ message: "Success" });
  });
});

app.post("/owner/update-room/", (req, res) => {
  const {
    roomid,
    username,
    roomname,
    roomsize,
    numberofbeds,
    minimumbookingperiod,
    maximumbookingperiod,
    amountperday,
    images,
  } = req.body;

  RoomDetailsModel.findOneAndUpdate({username,roomid},{
    roomid,
    username,
    roomname,
    roomsize,
    numberofbeds,
    minimumbookingperiod,
    maximumbookingperiod,
    rentperday: amountperday,
    images
  })
    .then((result) => {
       res.json({message:result})
    })
    .catch((err)=>{
      console.log(err)
    })
});

app.post("/owner/getrooms/", (req, res) => {
  const { username } = req.body;

  RoomDetailsModel.find({ username }).then((result, err) => {
    res.json({ message: result });
  });
});

app.post("/owner/roomdetails/", (req, res) => {
  const { username, roomid } = req.body;

  RoomDetailsModel.find({ username, roomid }).then((result, err) => {
    res.json({ message: result[0] });
  });
});
app.listen(8080, (port) => {
  console.log("Server connected");
});
