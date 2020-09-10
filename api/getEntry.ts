/**
 * Endpoint: /api/<LANG>
 * Method: GET
 * Params:
 *  - random: true
 * FaaS Name: getEntry
 * URL: https://us-east4-multilingual-wad.cloudfunctions.net/getEntry
 * Example usage:
 *  https://us-east4-multilingual-wad.cloudfunctions.net/getEntry?lang=arabic&random=true&freq=3
 */

exports.getEntry = async function (req, res) {
  const dbName = 'langs'
  const MongoClient = require('mongodb').MongoClient;
  const encodedPass = encodeURIComponent(process.env.DB_PASS)
  const uri = `mongodb+srv://jared:${encodedPass}@cluster0.zke5z.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority&authSource=admin`;
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  try {
    const { freq, lang, random } = req.query
    
    if (!lang || !random || !freq) {
      res.send("Error: insufficient query params")
    }

    await client.connect()

    const collection = client.db(dbName).collection(lang);
      
    const result = await collection.aggregate([
      { $match: { freq: parseInt(freq) } },
      { $sample: { size: 1 } }
    ])

    const resultAsArray = await result.toArray()
    
    res.send(resultAsArray[0])
  } finally {
    await client.close();
  }
}