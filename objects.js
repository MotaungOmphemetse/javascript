let school = {
    name: 'Central Sec School',
    location: 'NorthWest',
    established: "1990",
    20: 100,

    displayInfo: function(){
        console.log("Welcome to " + school.name);
        console.log(`Welcome to ${school.name} located at ${school.location} which was established in ${school.established} having rating of ${school[20]}%`);
    }, // the $ uses the ` 
}
school.displayInfo();