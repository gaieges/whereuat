# API App

```shell
# starts up a 'debug' session in nodejs that allows you to interactively debug
# via a web browser
node-debug --web-host=0.0.0.0 app.js

# install the dependencies of the app (Dockerfile is more accurate)
npm install -g express node-restful body-parser mongoose@3.8.25

# run the app
nodejs app.js
```


# Mongo

```shell
# connect to local db and print 'people' table
echo 'db.people.find()' | mongo localhost/whereuat

# drop whereuatdb
echo 'db.dropDatabase()' | mongo localhost/whereuat

```

```javascript
# generate some random users (node.js script)
for( var i = 1; i < 50; i++ ) {
  var newperson = PeopleModel({
    name:"fullname"+i,
    user:"user"+i,
    loc: {lat: i*5%50, lon: (i/2*10%50)}
  });
  newperson.save( );
}

```
