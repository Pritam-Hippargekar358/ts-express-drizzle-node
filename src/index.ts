import express from 'express';
import UserRouter from "./routes/user.route";

//npx drizzle-kit generate
//npx drizzle-kit migrate

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/api", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});