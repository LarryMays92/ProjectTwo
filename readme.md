KRACK'D APP

I want to create an app by the name of KRACK'D.
As a user i should be able to :

Request 4 Different Types Of Repair & Recieve A Quote For The Services 
Log In & Save The Quote, 
 - customer will use unique user and password for the page 
 - click on the type of repair they need
 - enter their name
 - enter their phone number
 - enter the issue 
 - select/input the device they wish to repair
 - select the location they wish to have the repair 
 - select the time of the repair
Make Edits To The Quote,
- if the customer isnt ready to submit their quote they will be able to save their quote and return to it to make updates
Delete Or Deny The Quote, 
- if the quote is no longer needed and they prefer to delete the quote and walk in for a more accurate one they should have that option
Or Accept The Quote 
- they can accept the quote and schedule and appointment
Select A appointment 
- select a location and set a time and date 
![NOTES4WF](New Note .jpeg)
![NOTES4WF](New Note 2.jpeg)

 ## API End Points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out`            | `users#signout`   |
| PATCH  | `/change-password`     | `users#changepw`  |
| GET    | `/repair`             | `repair#index`     |
| POST   | `/repair`             | `repair#create`    |
| GET    | `/repair/show/:id`    |`repair#showquote`      |
| PATCH  | `/repair/:id`         | `repair#updatequote`    |



Models for device
const deviceSchema = new Schema({
    make: String,
    model: String,
    repairCost: {
        type: Number,
        default: 25
    }
})

const devices = [
    {
        make: "apple",
        model: "iphone 12 pro max ",
        repairCost: 25
    },
    {
        make: "Samsung",
        model: "Galaxy s20",
        repairCost: 35
    }
    {
        make: "Google",
        model: "Pixel 4"
    },
    {
        make: "LG"
        model: Stylo 6
    },
    {
        make: "apple",
        model: "iphone 11 pro ",
        repairCost: 35
    },
    {
        make: "apple",
        model: "iphone 12 pro ",
        repairCost: 35
    },
    {
        make: "apple",
        model: "iphone 12 ",
        repairCost: 30
    },
    {
        make: "apple",
        model: "iphone 11 mini" ,
        repairCost: 25
    },
    {
        make: "Motorola",
        model: "G Stylus ",
        repairCost: 45
    },
    {
        make: "apple",
        model: "iphone XR",
        repairCost: 30
    }
]

repair model:
{
owner: userId,
phone: number,
issue: String,
device: deviceId (ref to the devices(one instance of a device for each repair)
}


on show page it should display a link to create a quote or sign in  and sign up
 also the logo 
 and phone number 

 sign in should take you to the forum for username and password /signin

 that should redirect you to the index where you can see your saved quotes, update or delete them or create a quote 
 
 once yu click create a quote it will take you to another screen which asks which type and you select one of the four options: screen, speaker, camera, charger

 each will consist of the repair model
 - name 
 - phone number 
 - type of device 
  - there will be a selection of devices to choose from from our seed database of device 
 - issue/comment
 once you finish with the forum it should render you back to the index same page you show when yu signed in to view it save it change it or update it 

 stretch goal to add location and time for repair 

 so a homepage 
 sign in page 
 sign up page
 create a quote page where yu input infomation one of each type of repair thats 4 
 sign in home page where saved quote should appear with options to update, delete or schedule 
 device model page for getting device price 
 device model page for the repairs forum 

device model page for sign in?

 