const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://sachijayakody98:root@cluster1.hyxuzvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function run() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}

module.exports = { client, run };
