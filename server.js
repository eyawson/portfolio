const express = require("express");
const app = express();
const port = 3000; // You can choose any port you like

app.use(express.static("public")); // Serve static files from the 'public' directory

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Serve index.html on the root path
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
