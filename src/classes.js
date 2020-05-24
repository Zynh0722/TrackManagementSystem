class Vehicle {
    constructor(make, model, year, color, engine, carNomo, sponsors, club) {
        this.make = make;
        this.model = model
        this.year = year;
        this.color = color;
        this.engine = engine;
        this.carNomo = carNomo;
        this.sponsors = sponsors;
        this.club = club;
    }

    setAttributes(driver) {
        driver.setAttribute("make", this.make);
        driver.setAttribute("model", this.model);
        driver.setAttribute("year", this.year);
        driver.setAttribute("color", this.color);
        driver.setAttribute("engine", this.engine);
        driver.setAttribute("carNomo", this.carNomo);
        driver.setAttribute("sponsors", this.sponsors);
        driver.setAttribute("club", this.club);
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

    setAttributes(driver) {
        driver.setAttribute("nomo", this.nomo);
        driver.setAttribute("address", this.address);
        driver.setAttribute("city", this.city);
        driver.setAttribute("zip", this.zip_code);
        driver.setAttribute("phone", this.phone);
        driver.setAttribute("email", this.email);
    }
}

exports.Vehicle = Vehicle;
exports.Driver = Driver;