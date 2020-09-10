/**
 * Endpoint: /api/feedback
 * Method: POST
 * Params:
 *  - entryId: ObjectID
 *  - feedback: string
 *  - language: LangCode
 *  - userComments: string
 * FaaS Name: postFeedback
 * URL: https://us-central1-multilingual-wad.cloudfunctions.net/postFeedback
 * Example usage:
 *  https://us-central1-multilingual-wad.cloudfunctions.net/postFeedback?entryId=2rf42&feedback=This+word+sucks&language=arabic&userComments=I+really+hated+this+word
 */


exports.postFeedback = async function (req, res) {
  const dbName = 'langs'
  const MongoClient = require('mongodb').MongoClient;
  const encodedPass = encodeURIComponent(process.env.DB_PASS)
  const uri = `mongodb+srv://jared:${encodedPass}@cluster0.zke5z.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority&authSource=admin`;
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  try {
    const { entryId, feedback, language, userComments } = req.query
    
    await client.connect()

    const collection = client.db(dbName).collection('feedback');
      
    await collection.insertOne({
      entryId,
      feedback,
      language,
      userComments
    })

    res.end()
  } finally {
    await client.close();
  }
}