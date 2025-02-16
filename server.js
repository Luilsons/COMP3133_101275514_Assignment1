require('dotenv').config({ path: './.env' }); 

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import GraphQL Schema and Resolvers
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5001;

// Debugging: Check if .env variables are loaded
console.log("MONGO_URI:", MONGO_URI ? "✅ Loaded" : "❌ MISSING");
console.log("PORT:", PORT);
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "✅ Loaded" : "❌ MISSING");

// Exit if MONGO_URI is missing
if (!MONGO_URI) {
    console.error("❌ ERROR: MONGO_URI is missing in .env. Server cannot start.");
    process.exit(1);
}

// Express App Setup
const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware for JSON parsing

// MongoDB Connection Function
async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Successfully connected to MongoDB!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
}

// Start the server
async function startServer() {
    await connectDB();

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
    });
}

startServer();
