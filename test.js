const test = require('ava')

const {Vehicle, Driver} = require('./src/classes');

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});

test('driver_sanity', t => {
    let driver_test = new Driver("Marty McFly", "9303 Lyon Drive", "Hill Valley", "CA", 95420, 9168423138, "marty.mcfly@protonmail.com");
    t.assert(driver_test.zip_code === 95420 && driver_test.state === "CA")
});

test('vehicle_sanity', t => {
    let vehicle_test = new Vehicle("DeLorean", 1985, "Space grey", "Flux capacitor", "Timey Wimey", "Amblin Entertainment", "Time Travelers Anonymous")
    t.assert(vehicle_test.nomo === "Timey Wimey" && vehicle_test.engine === "Flux capacitor")
});