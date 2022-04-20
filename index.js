const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello From Node Server!");
});

const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Brad", lastName: "Traversy" },
  { id: 3, firstName: "Marry", lastName: "Swanson" },
  { id: 4, firstName: "Carry", lastName: "Kwanson" },
  { id: 5, firstName: "Herry", lastName: "Lwanson" },
  { id: 6, firstName: "Larry", lastName: "Dwanson" },
  { id: 7, firstName: "Orry", lastName: "Pwanson" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const userId = req.params.id;
  const user = users.find((user) => user.id !== userId);
  res.json(user);
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
