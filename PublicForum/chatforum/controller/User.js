const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body;
  const testobject = req.body;
  console.log(`This is ${testobject}`);
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  console.log(testobject);
  const availableUser = await userModel.findOne({ email });
  if (availableUser) {
    console.log("User Exists");
    throw new Error("User already exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    console.log(`New User created successfully ${newUser.id}`);
    res.json({ newUser });
  } else {
    res.status(400);
    throw new Erro("User registration failed");
  }
}

async function userLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const availableUser = await userModel.findOne({
    email,
  });

  try {
    if (
      availableUser &&
      (await bcrypt.compare(password, availableUser.password))
    ) {
      const accessToken = jwt.sign(
        {
          user: {
            username: availableUser.username,
            email: availableUser.email,
            id: availableUser.id,
          },
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res
        .status(200)
        .cookie("accesstoken", accessToken, {
          httpOnly: true,
        })
        .json({ msg: "login succesful" });
    } else {
      console.log("Incorrect password or Email");
    }
  } catch (err) {
    console.log(err);
  }
}

async function getCurrentUser(req, res) {
  res.json(req.user);
}

module.exports = {
  registerUser,
  userLogin,
  getCurrentUser,
};
