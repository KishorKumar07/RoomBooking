const express = require("express");
const app = express();
const connection = require("./connection");
const OwnerRegModel = require("./models/OwnerRegandLogin");
const cors = require("cors");

const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const RoomDetailsModel = require("./models/RoomDetails");
const guestregmodel = require("./models/GuestRegandLogin");
const BookingModel = require("./models/BookingModel");
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/owner/register/", (req, res) => {
  const { username, email, number, password } = req.body;

  OwnerRegModel.create({ guestname:username, email, number, password }).then(
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
      res.json({ successMsg: "success", username: result[0].ownername });
    
    } else {
      res.json({ failMsg: "fail" });
    }
  });
});

app.post("/owner/create-room/", (req, res) => {
  const {
    roomid,
    ownername,
    roomname,
    roomsize,
    numberofbeds,
    amenities,
    minimumbookingperiod,
    maximumbookingperiod,
    amountperday,
    images,
  } = req.body;

  RoomDetailsModel.create({
    roomid,
    ownername,
    roomname,
    roomsize,
    numberofbeds,
    amenities,
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
    ownername,
    roomname,
    roomsize,
    numberofbeds,
    minimumbookingperiod,
    maximumbookingperiod,
    rateperday,
    images,
  } = req.body;

  RoomDetailsModel.findOneAndUpdate({ownername,roomid},{
    roomid,
    ownername,
    roomname,
    roomsize,
    numberofbeds,
    minimumbookingperiod,
    maximumbookingperiod,
    rateperday,
    images
  })
    .then((result) => {
       res.json({message:result})
    })
    .catch((err)=>{
      console.log(err)
    })
});
app.post("/owner/deleteroom/", (req, res) => {
  const { ownername,roomid } = req.body;

  RoomDetailsModel.findOneAndDelete({ ownername,roomid }).then((result, err) => {
    res.json({ message: result });
  });
});
app.post("/owner/getrooms/", (req, res) => {
  const { ownername } = req.body;

  RoomDetailsModel.find({ ownername }).then((result, err) => {
    res.json({ message: result });
  });
});

app.post("/owner/roomdetails/", (req, res) => {
  const { ownername, roomid } = req.body;

  RoomDetailsModel.find({ ownername, roomid }).then((result, err) => {
    res.json({ message: result[0] });
  });
});



app.post("/guest/register/", (req, res) => {
  const { guestname, email, number, password } = req.body;

  guestregmodel.create({ guestname, email, number, password }).then(
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

app.post("/guest/login/", (req, res) => {
  const { email, password } = req.body;

  guestregmodel.find({ email }).then((result, err) => {
    if (result[0].password == password) {
      res.json({ successMsg: "success", guestname: result[0].guestname });
    } else {
      res.json({ failMsg: "fail" });
    }
  });
});

app.post("/guest/getrooms/", (req, res) => {
  RoomDetailsModel.find({}).then((result, err) => {
    res.json({ message: result });
  });
});


app.post("/guest/roomdetails/", (req, res) => {
  const { username, roomid } = req.body;

  RoomDetailsModel.find({ username, roomid }).then((result, err) => {
    res.json({ message: result[0] });
  });
});


app.post("/guest/request-booking/", (req, res) => {
  const {guestname } = req.body;

  BookingModel.find({guestname}).then((result, err) => {
     console.log(result)
  });
});


app.post("/guest/get-booking-status", (req, res) => {
  const {guestname,ownername,roomid,status,date } = req.body;

  BookingModel.create({guestname,ownername,roomid,status,bookingdates:date }).then((result, err) => {
    res.json({message:result})
  });
});

app.listen(8080, (port) => {
  console.log("Server connected");
});
