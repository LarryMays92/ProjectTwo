KRACK'D APP

 # Krack'd App Client

This is a client for our Krack'd app. It will allow users to see, and add new qutes for repairs, as well as edit them.

## User Stories

* As a user, I want to be able to create an account.
* As a user, I want to be able to sign in.
* As a user, I want to be able to sign out.
* As a user, I want to be able to change my password.
* As a user, I want to be able to see all quotes.
* As a user, I want to be able to see information about a specific quote.
* As a user, I want to be able to add a new quotes.
* As a user, I want to be able to update my quotes.
* As a user, I want to be able to delete my quotes.

## Models

const deviceSchema = new Schema({
    make: String,
    model: String,
    repairCost: {
        type: Number,
        default: 25
    }
})


repair model:{
owner: userId,
phone: number,
issue: String,
device: deviceId (ref to the devices(one instance of a device for each repair)
}


### User Views

| Route | Description |
| ----- | ----------- |
| /sign-up | allows users to create a new account |
| /sign-in | allows users to sign into their account |
| /sign-out | allows users to sign out of their account |
| /change-password | allows users to change their password |

 ## API End Points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out`            | `users#signout`   |
| PATCH  | `/change-password`     | `users#changepw`  |
| GET    | `/myquotes`             | `quotes#index`     |
| POST   | `/quotes/`             | `quote#create`    |
| GET    | `/quotes/show/:id`    |`quote#showquote`      |
| PATCH  | `/quotes/:id`         | `quote#updatequote`    |



Quotes show page will have a model for updating.
Users will be able to delete via the show page.

### Wireframes

![Wireframe](/Note1.jpeg)
![wireframe](/Note2.jpeg)
