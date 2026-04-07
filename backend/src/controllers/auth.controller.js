const db = require("../db");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 8);

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashed],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User registered successfully" });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (result.length === 0)
        return res.status(404).json({ message: "User not found" });

      const user = result[0];
      const valid = bcrypt.compareSync(password, user.password);

      if (!valid)
        return res.status(401).json({ message: "Invalid password" });

      res.json({ message: "Login successful", user });
    }
  );
  
};
