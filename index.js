const admin = require('firebase-admin');

var serviceAccount = require("./prod-dikusy-hp-firebase-adminsdk-bagt1-d79f38a3a5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var docRef = db.collection('portfolio').doc('url');

var setAda = docRef.set({
    first: 'https://xxxxxxxx.com',
    second: 'https://yyyyyyyy.jp',
    third: 'https://zzzzzzzz.com',
    fourth: 'https://xyzxyzxyz.com',
});

// db.collection('users').get()
//     .then((snapshot) => {
//         snapshot.forEach((doc) => {
//             console.log(doc.id, '=>', doc.data());
//         });
//     })
//     .catch((err) => {
//         console.log('Error getting documents', err);
//     });
