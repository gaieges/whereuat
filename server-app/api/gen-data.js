var numToGen=500000;

for(var i=0; i<numToGen; i++) {
  db.collection.insert({
    name: "name"+i,
    user: "user"+i,
    loc: {
      lat: (i*15.3)%50.3, lon: (i*135.32)%50.6
    }
  });
}
