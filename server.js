const express = require("express");
const app = express();
const port = 5000;

const customers = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Mike", lastName: "Jackson" },
  { id: 3, firstName: "Lesya", lastName: "Nikityuk" },
];

app.get("/api/customers", (req, res) => {
  res.json(customers);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
