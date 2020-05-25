const test = require('ava')

const {Vehicle, Driver} = require('./src/classes');
const import_export = require('./src/import_export');


let driver_test = new Driver("Marty McFly", "9303 Lyon Drive", "Hill Valley", "CA", 95420, 9168423138, "marty.mcfly@protonmail.com");
let vehicle_test = new Vehicle("DMC", "Delorean", 1985, "Space grey", "Flux capacitor", "Timey Wimey", "Amblin Entertainment", "Time Travelers Anonymous")


test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});

test('driver_sanity', t => {
    t.assert(driver_test.zip_code === 95420 && driver_test.state === "CA")
});

test('vehicle_sanity', t => {
    t.assert(vehicle_test.carNomo === "Timey Wimey" && vehicle_test.engine === "Flux capacitor")
});

test('test_load_vehicle', t => {
    let tested_vehicle = import_export.load_vehicles("./src/test_vehicles.csv")[0]
    t.assert(vehicle_test.carNomo === tested_vehicle.carNomo)
})

test('test_load_driver', t => {
    t.assert(driver_test.zip_code === import_export.load_drivers("./src/test_drivers.csv")[0].zip_code)
})

test('amistupid', t => {
    t.assert(import_export.load_drivers("./src/test_drivers.csv") === undefined)
})