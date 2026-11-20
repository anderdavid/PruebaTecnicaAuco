import dotenv from "dotenv";
import app from "./app";
import { createTable } from "./scripts/createTable";
import { createZipArchive } from "node:zlib";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
createTable();
