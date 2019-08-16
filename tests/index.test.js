const getCleanWeather = require('../index')

test("sanity check", () => {
  //should pass
})

test("test getCleanWeather", () => {
  expect.assertions(1);
  return getCleanWeather('94109').then(res => expect(res.location).toBe("San Francisco"))
})