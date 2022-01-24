const express = require("express");
const faker = require('@faker-js/faker');
const app = express();
const port = 8001;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User{
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = [
            faker.address.streetName(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.address.country()
        ]
    }
}


app.get("/api/users/new", (req, res) => {
    res.json({
        "New User": new User()
    });
});


app.get("/api/companies/new", (req, res)=>{
    res.json({
        "New Company": new Company()
    })
})

app.get("/api/user/company", (req, res)=>{
    res.json({
        "New User": new User(),
        "New Company": new Company()
    })
})




app.listen( port, () => console.log(`Listening on port: ${port}`) );