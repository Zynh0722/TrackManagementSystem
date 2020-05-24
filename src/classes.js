class Vehicle {
    constructor(make_model, year, color, engine, nomo, sponsors, club) {
        this.make_model = make_model;
        this.year = year;
        this.color = color;
        this.engine = engine;
        this.nomo = nomo;
        this.sponsors = sponsors;
        this.club = club;
    }
}

class Driver {
    constructor(nomo, address, city, state, zip_code, phone, email) {
        this.nomo = nomo;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip_code = zip_code;
        this.phone = phone;
        this.email = email;
    }
}

exports.Vehicle = Vehicle;
exports.Driver = Driver;