const centralDiv = document.getElementById("content-container")
const centralFragment = document.createDocumentFragment()

// --------------------Current Job-------------------------
const NSSvar = Object.create({}, {
    business: {
        value: "NSS",
        enumerable: true,
        writable: false,
    },
    role: {
        value: "Role: Student",
        enumerable: true,
        writable: false,
    },
    employmentStart: {
        value: "State Date: 05-21-2018",
        enumerable: true,
        writable: false,
    },
    employmentEnd: {
        value: "End Date: Present",
        enumerable: true,
        writable: false,
    }
})

// -------------------- Job 2-------------------------
const ESaVar = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "ESa"
    },
    role: {
        enumerable: true,
        writable: false,
        value: "Role: Receptionist"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "Start Date: 02-24-2014"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "End Date: 05-18-2018"
    }
})

// -------------------- Job 3-------------------------
const ApexSystemsVar = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "ApexSystems"
    },
    role: {
        enumerable: true,
        writable: false,
        value: "Role: Project Manager"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "Start Date: 08-11-2013"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "End Date: 02-20-2014"
    }
})

// -------------------- Job 4-------------------------
const AristoMediaVar = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: "AristoMedia"
    },
    role: {
        enumerable: true,
        writable: false,
        value: "Role: Assistant to the Senior Publicist"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "Start Date: 01-06-2010"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "End Date: 08-08-2013"
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

const jobsArray = [NSSvar, ESaVar, ApexSystemsVar, AristoMediaVar];

for(let i = 0; i < jobsArray.length; i++) {
   let article = document.createElement("article")
   article.setAttribute("id",jobsArray[i].business);

    let header = document.createElement("h1")
    header.innerHTML = jobsArray[i].business
    article.appendChild(header)
    let ul = document.createElement("ul")
    article.appendChild(ul)
    let li = document.createElement("li")
    ul.appendChild(li)
    li.innerHTML = jobsArray[i].role
    let li2 = document.createElement("li")
    li.appendChild(li2)
    li2.innerHTML = jobsArray[i].employmentStart
    let li3 = document.createElement("li")
    li2.appendChild(li3)
    li3.innerHTML = jobsArray[i].employmentEnd
    // let info = document.createElement("ul")
    // info.innerHTML = `${jobsArray[i].role}; ${jobsArray[i].employmentStart} - ${jobsArray[i].employmentEnd}`
    // article.appendChild(info)

   console.log(article)

    centralFragment.appendChild(article)

   centralDiv.appendChild(centralFragment)
}

