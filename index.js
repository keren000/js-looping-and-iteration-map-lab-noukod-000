// Code your solution in this file.
function lowerCaseDrivers(array)
{
    return array.map(driver) => driver.toLowerCase();
}

function nameToAttributes(profile_user){
  return profile_user.map(function(driver){
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(attributes){
  return attributes.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
