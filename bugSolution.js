```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb://localhost:27017/myDatabase"; //Correct URI with database name
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to server");
    // Add database operations here
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```