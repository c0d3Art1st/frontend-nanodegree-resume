/*
This is empty on purpose! Your code to build the resume will go here.
 */


//OBJECTS

var bio = {
  "name" : "Andi Stiegler",
  "role" : "Front-End-Ninja",
  "welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc...",
  "imageURL" : "images/fry.jpg",
  "contacts" :  {
    "mobile" : "+49 0175 1234567",
    "email" : "codeArtist@gmx.de",
    "twitter" : "",
    "github" : "codeArist",
    "location" : "Poing, Germany"
  },
  "skills" : ["Web Development", "Programming", "Graphics & Art-Design", "Deliver on time"]
};

var education = {
  "schools" : [{
      "name" : "University of Applied Sciences",
      "location" : "Munich, Germany",
      "degree" : "BA",
      "majors" : ["BIS"],
      "dates" : 2018,
      "url" : "https://cs.hm.edu"
  }, {
    "name" : "Telekolleg",
    "location" : "Munich, Germany",
    "degree" : "High School Diploma",
    "majors" : ["Engineering"],
    "dates" : 2014,
    "url" : "https://www.telekolleg.edu"
  }],
  "onlineCourses" : [{
      "title": "Javascript Basics",
      "school": "Udacity Inc.",
      "dates": 2016,
      "url": "http://www.udacity.com/course/ud8054"
  }]
};

var work = {
  "jobs" : [
    {
      "title" : "Freelance Web Developer",
      "employer" : "Various",
      "dates" : "01.01.2016 - 31.12.2017",
      "location" : "Munich, Germany",
      "description" : "Various small- to medium-size Web-Projects for clients in the vicinity of Munich, Germany"
    }
  ]
};

//Skills

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(item, index, array) {
    $('#skills').append(HTMLskills.replace("%data%", item));
  });
}

// jobs
/*
for (var job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
                       HTMLworkTitle.replace("%data%", work.jobs[job].title));
}
*/
work.jobs.forEach(function(item, index, array) {
  $("#workExperience").append(HTMLworkStart);

  $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", item.employer) +
                       HTMLworkTitle.replace("%data%", item.title));
  $(".work-entry:last").append(HTMLworkDates.replace("%data%", item.dates));
  $(".work-entry:last").append(HTMLworkLocation.replace("%data%", item.location));
  $(".work-entry:last").append(HTMLworkDescription.replace("%data%", item.description));
});



/*
var formattedName = HTMLheaderName.replace("%data%", "Andi Stiegler");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End-Ninja");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.imageURL);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);

$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedBioPic);
$("#header").append(HTMLskillsStart);

bio.skills.forEach(function(item, index, array){
  $("#skills").append(HTMLskills.replace("%data%", item));
});

// work
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.workTitle);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.workDates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.workLocation);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.workDescription);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle);
$(".work-entry").append(formattedWorkDates);
$(".work-entry").append(formattedWorkLocation);
$(".work-entry").append(formattedWorkDescription);

// education
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schoolName);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schoolDegree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.educationDate);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schoolLocation);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName + formattedSchoolDegree );
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
*/
