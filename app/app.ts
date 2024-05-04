import express, { Request, Response, type Express } from "express";

const app: Express = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
