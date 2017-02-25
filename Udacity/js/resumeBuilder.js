/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*var awesomeThoughts = "I am Somaya and I am AWESOME!"

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

 $("#main").append(funThoughts); */

var formattedName = HTMLheaderName.replace("%data%", "Somaya Bounouar")

var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer")




$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




var bio = {
  "name" : "Somaya",
  "role" : "Software Developer Apprentice",
  "contactInfo" : "abcd@gmail.com",
  "welcomeMessage" : "Welcome to my portfolio!",
  "bioPic" : "images/fry.jpg",
  "skills" : ["javascript", "HTML5", "CSS"]
};


var work = {
  "jobs" : [
    {
  "title" : "Software Developer Apprentice",
  "employer" : "Learners Guild",
  "dates" : "Feb 2017 - current",
  "location" : "Oakland, CA, US",
  "description" : "Full Stack Developer Apprenticeship Intensive."
    },
    {
    "title" : "Videographer",
    "employer" : "Self-Employed",
    "dates" : "August 2014 - December 2016",
    "location" : "Various Locations across North America",
    "description" : "Film and edit promotional and event videos for multiple clients."
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "San Francisco State University",
      "city" : "San Francisco, CA, US",
      "major" : "Broadcast and Electronic Communication Arts",
      "graduationYear" : "2013"
    },
    {
      "name" : "Pasadena City College",
      "city" : "Pasadena, CA, US",
      "major" : "Social and Behavioral Sciences",
      "graduationYear" : "2011"
    }
  ]
};

var projects = {
  "projects" : [
    {
    "title" : "Emoji Cipher",
    "dates" : "February 2017",
    "description" : "Create a Node.js module that exports two functions: one to encode a string of alphanumeric characters into emoji, and another to decode an emoji message to the original string."
    },
    {
    "title" : "Core Vanilla JavaScript - Solo Study",
    "dates" : "February 2017",
    "description" : "A day-by-day structured deep dive into the basics JavaScript. Read articles, watch videos, complete lessons and exercises, and implement a final project."
    }
  ]
};


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);

}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);


    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);


    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

displayWork();

$(document).click(function(loc) {
  // your code goes here
var x = loc.pageX;
var y = loc.pageY;

  logClicks(x,y);
});


function inName(name) {
  name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();

    return name[0] +" "+ name[1];

}
function displayProjects () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
  }
};

displayProjects();

// function displayEducation () {
//   for (school in education.schools) {
//     $("#education").append(HTMLschoolStart);
//
//     var formattedName = HTMLschoolName.replace("%data%"), education.schools[school].name);
//       $(".education-entry:last").append(formattedName);
//
//     var formattedCity = HTMLschoolLocation.replace("%data%"), education.schools[school].city);
//       $(".education-entry:last").append(formattedCity);
//
//     var formattedMajor = HTMLschoolMajor.replace("%data%"), education.schools[school].major);
//       $(".education-entry:last").append(formattedMajor);
//
//     var formattatedGradYear = HTMLschoolDates.replace("%data%"), education.schools[school].graduationYear];
//       $(".education-entry:last").append(formattedGradYear);
//   }
// };
//
// displayEducation();





//("#mapDiv").append(googleMap);

//$('#main').append(internationalizeButton);
