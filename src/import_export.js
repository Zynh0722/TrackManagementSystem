const fs = require('fs');
const {Vehicle, Driver} = require('./classes');

function load_drivers(driver_file) {
    fs.readFile(driver_file, 'utf-8', (err, data) => {
        if (err) throw err;

        let drivers_list = []

        for (let line of data.split("\n")){
            drivers_list.push(new Driver(
                line[0],
                line[1],
                line[2],
                line[3],
                line[4],
                line[5],
                line[6]
            ))
        }

        return drivers_list
    })
}

function load_vehicles(vehicles_file) {
    fs.readFile(vehicle_file, 'utf-8', (err, data) => {
        if (err) throw err;

        let vehicles_list = []

        for (let line of data.split("\n")){
            vehicles_list.push(new Vehicle(
                line[0],
                line[1],
                line[2],
                line[3],
                line[4],
                line[5],
                line[6],
                line[7]
            ))
        }

        return vehicles_list
    })
}

module.exports = load_drivers
module.exports = load_vehicles