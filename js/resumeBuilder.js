var bio = {
	"header":{
		"name": "Alice Letourneur",
		"role": "Front-End Developer",
		"contacts": {
			"mobile": "07447 552714",
			"email": "aliceletourneur@icloud.com",
			"github": "alice-letourneur",
			"location": "Brighton, UK"
		},
		"welcome_message": "Welcome to my bio",
		"skills": [
			"reliable", "dedicated", "curious"
		],
		"bioPic": "images/aliceletourneur.png"
	}
};
	

var formattedName =
	HTMLheaderName.replace("%data%", bio.header.name);

var formattedRole =
	HTMLheaderRole.replace("%data%", bio.header.role);

var formattedMobile = 
	HTMLmobile.replace("%data%", bio.header.contacts.mobile);

var formattedEmail = 
	HTMLemail.replace("%data%", bio.header.contacts.email);

var formattedGithub = 
	HTMLgithub.replace("%data%", bio.header.contacts.github);

var formattedLocation = 
	HTMLlocation.replace("%data%", bio.header.contacts.location);

var formattedWelcomeMessage = 
	HTMLwelcomeMsg.replace("%data%", bio.header.welcome_message);



var formattedPicture = 
	HTMLbioPic.replace("%data%", bio.header.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMessage);

if (bio.header.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = 
		HTMLskills.replace("%data%", bio.header.skills[0]);
	$("#header").append(formattedSkills);

	formattedSkills = 
		HTMLskills.replace("%data%", bio.header.skills[1]);
	$("#header").append(formattedSkills);

	formattedSkills = 
		HTMLskills.replace("%data%", bio.header.skills[2]);
	$("#header").append(formattedSkills);
};



var work = { 
	"jobs": [
	{
		"jobtitle": "Global Business Integration Analyst",
		"employer": "American Express",
		"workdates": "2014 - now",
		"worklocation": "Brighton, UK",
		"workdescription" : "My main focus is to ensure operational alignment and readiness for new product launches, processes or system changes and card member communications. I’ll have to ensure that the changes won't impact customer satisfaction, won’t drive unnecessary call volumes, won’t increase call handling time metrics and that CCPs have all the information required to be able to provide the best customer service. I am partnering closely across lines of business to prevent defects, record them, facilitate their resolution and ensure communication and awareness of CEN. Besides, I’ve participated to the ECCO Rationalization Project to increase accuracy of the content and optimized search results to build a trustworthy and reliable tool for our CCPs."
	},
	{
		"jobtitle": "Global New Accounts Subject Matter Expert",
		"employer": "American Express",
		"workdates": "2012 - 2014",
		"worklocation": "Brighton, UK",
		"workdescription" : "As a CCP I was in charge of processing customers’ applications whether they are individuals or businesses whilst ensuring that risk and compliance requirements are respected and undertaking daily offline tasks. In addition to these tasks and thanks to my expertise I became the SME of the market and took further responsibilities such as providing training to CCPs and being the POC for major projects to ensure the new processes built are designed accordingly with the needs of end-users."
	}
	]
};

function displayWork() {
	for (jobs in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = 
		HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);

		var formattedJobTitle = 
		HTMLworkTitle.replace("%data%", work.jobs[jobs].jobtitle);

		var formattedEmployerJobTitle =
		formattedEmployer + formattedJobTitle;

		$(".work-entry:last").append(formattedEmployerJobTitle);

		var formattedWorkDates = 
		HTMLworkDates.replace("%data%", work.jobs[jobs].workdates);

		var formattedWorkLocation = 
		HTMLworkLocation.replace("%data%", work.jobs[jobs].worklocation);

		var formattedWorkDatesLocation = formattedWorkDates + formattedWorkLocation;

		$(".work-entry:last").append(formattedWorkDatesLocation);

		var formattedWorkDescription = 
		HTMLworkDescription.replace("%data%", work.jobs[jobs].workdescription);
		
		$(".work-entry:last").append(formattedWorkDescription);
	};
};

displayWork();

var education = { 
	"schools": [
	{
		"schoolname": "University of Caen Lower Normandy",
		"schooldates": "2009 - 2012",
		"schoollocation": "Caen, Lower Normandy, FRANCE",
		"schooldegree": "Bachelor",
		"schoolmajor" : "Foreign Languages with Economics & International Business"
	},
	{
		"schoolname": "Lycée Pierre & Marie Curie",
		"schooldates": "2006 - 2009",
		"schoollocation": "Saint-Lô, Lower Normandy, FRANCE",
		"schooldegree": "Baccalaureate",
		"schoolmajor" : "Computer Science"
	}
	],
	"onlineclass" : [
		{
			"onlineschool": "Udacity",
			"onlinedates": "2016 - Today",
			"onlinetitle": "Front-End Development Nanodegree",
			"onlineurl" : "www.udacity.com"
		}
	]
};

function displaySchool() {
	for (schools in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = 
			HTMLschoolName.replace("%data%", education.schools[schools].schoolname);

		var formattedSchoolDegree = 
			HTMLschoolDegree.replace("%data%", education.schools[schools].schooldegree);

		var formattedSchoolNameDegree = 
		formattedSchoolName + formattedSchoolDegree;
		
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = 
			HTMLschoolDates.replace("%data%", education.schools[schools].schooldates);

		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = 
			HTMLschoolLocation.replace("%data%", education.schools[schools].schoollocation);

		$(".education-entry:last").append(formattedSchoolLocation);
		
		var formattedSchoolMajor = 
		HTMLschoolMajor.replace("%data%", education.schools[schools].schoolmajor);

		$(".education-entry:last").append(formattedSchoolMajor);
	};
		

		for (onlineclasses in education.onlineclass) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = 
		HTMLonlineTitle.replace("%data%", education.onlineclass[onlineclasses].onlinetitle);
		var formattedOnlineSchool = 
		HTMLonlineSchool.replace("%data%", education.onlineclass[onlineclasses].onlineschool);		
		var formattedOnlineTitleOnlineSchool = (formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineTitleOnlineSchool);

		var formattedOnlineDates = 
		HTMLonlineDates.replace("%data%", education.onlineclass[onlineclasses].onlinedates);

		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = 
		HTMLonlineURL.replace("%data%", education.onlineclass[onlineclasses].onlineurl);

		$(".education-entry:last").append(formattedOnlineURL);
	};
};

displaySchool();


var project = {
	"projects": [
	{
		"projecttitle": "My Online Resume",
		"projectdate": "October 2016",
		"projectdescription" : "My description goes here"
	},
	{
		"projecttitle": "My Portfolio",
		"projectdate": "October 2016",
		"projectdescription" : "My description goes here"
	}
	]
};

///This is an encapsulation
project.display = function() {
		for (projects in project.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedProjectTitle = 
		HTMLprojectTitle.replace("%data%", project.projects[projects].projecttitle);
		
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = 
		HTMLprojectDates.replace("%data%", project.projects[projects].projectdate);

		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription =
		HTMLprojectDescription.replace("%data%", project.projects[projects].projectdescription);

		$(".project-entry:last").append(formattedProjectDescription)
	};
};

project.display();

//Give me the click location on the page
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks (x,y);
});

$("#main").append(internationalizeButton);

//Capitalize my Lastname
var inName = function(name) {
	name = name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
};

//Display map
$("#mapDiv").append(googleMap);


