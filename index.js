import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/get-dog-pic", async (req, res) => {
  try {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    // console.log(result);
    res.render("index.ejs", { dogUrl: result.data.message });
  } catch (error) {
    const errorCode = error.status;
    res.send(`https://httpcats.com/[${errorCode}].jpg`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
