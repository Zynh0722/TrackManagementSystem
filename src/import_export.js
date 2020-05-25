const fs = require('fs');
const {Vehicle, Driver} = require('./classes');

function load_drivers(driver_file) {
    fs.readFile(driver_file, 'utf-8', (err, data) => {
        if (err) throw err;

        let drivers_list = []

        for (let line of data.split("\n")) {
            let words = line.split(",")
            drivers_list.push(new Driver(
                words[0],
                words[1],
                words[2],
                words[3],
                words[4],
                words[5],
                words[6]
            ))
        }

        console.log(drivers_list)

        return drivers_list
    })
}

function load_vehicles(vehicle_file) {
    fs.readFile(vehicle_file, 'utf-8', (err, data) => {
        if (err) throw err;

        let vehicles_list = []

        for (let line of data.split("\n")){
            let words = line.split(",")
            vehicles_list.push(new Vehicle(
                words[0],
                words[1],
                words[2],
                words[3],
                words[4],
                words[5],
                words[6],
                words[7]
            ))
        }

        return vehicles_list
    })
}

module.exports = {
    load_vehicles,
    load_drivers
}