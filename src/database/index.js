import { Database } from "@vuex-orm/core";

import Post from "@/models/Post";

// Create a new instance of Database
const database = new Database();

// Register Models to Database
database.register(Post);

export default database;
