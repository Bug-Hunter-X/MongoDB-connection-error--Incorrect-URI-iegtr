```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb://localhost:27017/"; //Incorrect URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```