// --------------------Current Job-------------------------
const NSS = Object.create({}, {
    business: {
        value: "NSS",
        enumerable: true,
        writable: false,
    },
    role: {
        value: "student",
        enumerable: true,
        writable: false,
    },
    employmentStart: {
        value: "05-21-2018",
        enumerable: true,
        writable: false,
    },
    employmentEnd: {
        value: "present",
        enumerable: true,
        writable: false,
    }
})

// -------------------- Job 2-------------------------
const ESa = Object.create({}, {
    business: {
        value: "ESa"
    },
    role: {
        value: "receptionist"
    },
    employmentStart: {
        value: "02-24-2014"
    },
    employmentEnd: {
        value: "05-18-2018"
    }
})

// -------------------- Job 3-------------------------
const ApexSystems = Object.create({}, {
    business: {
        value: "ApexSystems"
    },
    role: {
        value: "Project Manager"
    },
    employmentStart: {
        value: "08-11-2013"
    },
    employmentEnd: {
        value: "02-20-2014"
    }
})

// -------------------- Job 4-------------------------
const AristoMedia = Object.create({}, {
    business: {
        value: "AristoMedia"
    },
    role: {
        value: "Assistant to the Senior Publicist"
    },
    employmentStart: {
        value: "01-06-2010"
    },
    employmentEnd: {
        value: "08-08-2013"
    }
})



// Challenge: Write a function that will build, and return, a job object. Make sure you define an argument for each one of the properties you want to be in the object.

const JobMaker = (business, role, employmentStart, employmentEnd) => {
    let theObjectYouBuilt = Object.create({}, {
        business: {
            value: business
        },
        role: {
            value: role
        },
        employmentStart: {
            value: employmentStart
        },
        employmentEnd: {
            value: employmentEnd
        }  
    });
    
    return theObjectYouBuilt
}

let Job = JobMaker("circus", "lion tamer", "30455", "woeagf");

console.log(Job);


