# Resfeber-App Server

## About

That mixture of feelings before you go to a trip is called Resfeber, we present this app.
For all the travelers around the world,Resfeber is a social media app to share and join other people´s travels, and plan your next trip.

## Views

Intro: Intro of the app, will present the logo, user will be starting to familiarize with the app, and enter the name.

Signup: User will signup in the app if is the first time using it.

Signin: User will login if already have create a profile before.

User-profile: User will see his data, the travels he creates, will be able to edit them and delete them.

Favorite Page: User will have all the travels he selected as Favorites.

Add Travel: user will create a travel, that other user will see and join.

Home: user can see all the travels users post and like them.

Search: user can search other user with same interest to check their travels.

### ROUTES

All routes set with /api
AUth created using boilerplate

| Travels ROUTES | VERB   | Description      | View          |
| -------------- | ------ | ---------------- | ------------- |
| /              | GET    | getl all travels | /home         |
| /upload        | POST   | add new travel   | /createTravel |
| /edit/:id      | PUT    | edit travels     | /profile      |
| /:id           | GET    | travel details   | /home         |
| /delete/:id    | delete | delete travel    | /profile      |

| User ROUTES | VERB | Description               | View         |
| ----------- | ---- | ------------------------- | ------------ |
| /edit       | PUT  | update info               | /profile     |
| /like/:id   | PUT  | update isFavorite travels | /home        |
| /:id        | get  | get users profile         | /userProfile |

#### MODELS

User model:
{
name: {
type: String,

      unique: true,
    },
    travels: [
      {
        type: Schema.Types.ObjectId,
        ref: "Travel",
      },
    ],
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    picture: {
      type: String,
    },
    interests: [
      {
        type: String,
        enum: [
          "Aventurer",
          "Beach",
          "Culture",
          "Food",
          "Nature",
          "Nightlife",
          "Shopping",
        ],
      },
    ],
    gender: {
      enum: ["Female", "Male", "Other"],
    },
    age: {
      type: Number,
    },
    comments: {
      type: String,
    },
    isFavorite: [
      {
        type: Schema.Types.ObjectId,
        ref: "Travel",
      },
    ], // your favorites here id

},
);

travelModel:
{
owner: {
type: Schema.Types.ObjectId,
ref: "User",
},
initialDate: {
type: Date,
},
finalDate: {
type: Date,
},
destination: {
type: String,
},
typeTravel: {
type: String,
enum: ["Eco", "Family", "Friends", "Only Women", "Solo"],
},
origin: {
type: String,
},
route: {
type: String,
},
budget: {
type: Number,
},
images: {
type: String,
},

    isPrivate: {
      type: Boolean,
      default: false,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

},

commentsModel:
{
author: { type: Schema.Types.ObjectId, ref: "User" },
travel: { type: Schema.Types.ObjectId, ref: "Travel" },
text: {
type: String,
},
stars: {
type: Number,
},
});

## links

Deploy : https://resfeber-app.netlify.app/

gitHub server : https://github.com/jferassef/resfeber-server
gitHub client: https://github.com/cristinahcm/resfeber-client
