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
        enumerable: true,
        writable: false,
        value: "ESa"
    },
    role: {
        enumerable: true,
        writable: false,
        value: "receptionist"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "02-24-2014"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "05-18-2018"
    }
})

// -------------------- Job 3-------------------------
const ApexSystems = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "ApexSystems"
    },
    role: {
        enumerable: true,
        writable: false,
        value: "Project Manager"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "08-11-2013"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "02-20-2014"
    }
})

// -------------------- Job 4-------------------------
const AristoMedia = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "AristoMedia"
    },
    role: {
        enumerable: true,
        writable: false,
        value: "Assistant to the Senior Publicist"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "01-06-2010"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
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


//Advanced Challenge
// 1. Put each of your jobs into an array.
// 2. Iterate over the array, and use document.createElement() to build an <article> element representing each job. The id property of the element should be the name of the business.

const jobsArray = [NSS, ESa, ApexSystems, AristoMedia];

for(let i = 0; i < jobsArray.length; i++) {
   let article = document.createElement("article")
   article.setAttribute("id",jobsArray[i].business);
   console.log(article)
}