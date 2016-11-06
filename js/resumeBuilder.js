var bio = {
	"header":{
		"name": "Alice Letourneur",
		"role": "Front-End Developer",
		"contacts": {
			"mobile": "(+44) 07447 552714",
			"email": "aliceletourneur@icloud.com",
			"github": "alice-letourneur",
			"location": "Brighton, UK"
		},
		"welcome_message": "Hi ! I'm Alice, a 25 yo Front-End Developer looking into  My description goes here. My description goes here. My description goes here. My description goes here. My description goes here. My description goes here. My description goes here. My description goes here. My description goes here. My description goes here. My description goes here.",
		"skills": [
			"images/logo-html5.svg", "images/logo-css3.svg", "images/logo-bootstrap.svg", "images/logo-javascript.svg", "images/logo-jquery.svg", "images/logo-git.svg"
		],
		"bioPic": "images/aliceletourneur.png"
	}
};

///This is an encapsulation
bio.display = function() {
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
	var skillsList = '<ul id="skills" class="flex-box list-inline list-unstyled"></ul>';
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").prepend(formattedMobile);
	$("#topContacts").prepend(formattedEmail);
	$("#topContacts").prepend(formattedGithub);
	$("#topContacts").prepend(formattedLocation);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(HTMLskillsStart);
	$("#header").append(skillsList);
	if (bio.header.skills.length > 0) {
		var formattedSkills = 
			HTMLskills.replace("%data%", bio.header.skills[0]);
		$("#skills").append(formattedSkills);
		formattedSkills = 
			HTMLskills.replace("%data%", bio.header.skills[1]);
		$("#skills").append(formattedSkills);
		formattedSkills = 
			HTMLskills.replace("%data%", bio.header.skills[2]);
		$("#skills").append(formattedSkills);
		formattedSkills = 
			HTMLskills.replace("%data%", bio.header.skills[3]);
		$("#skills").append(formattedSkills);
		formattedSkills = 
			HTMLskills.replace("%data%", bio.header.skills[4]);
		$("#skills").append(formattedSkills);
		formattedSkills = 
			HTMLskills.replace("%data%", bio.header.skills[5]);
		$("#skills").append(formattedSkills);
	};
};

bio.display();

var work = { 
	"jobs": [
	{
		"jobtitle": "Global Business Integration Analyst",
		"employer": "American Express",
		"workdates": "2014 - now",
		"worklocation": "Brighton, UK",
		"workdescription" : "My main focus is to ensure operational alignment and readiness for new product launches, processes or system changes and card member communications. I’ll have to ensure that the changes won't impact customer satisfaction, won’t drive unnecessary call volumes, won’t increase call handling time metrics and that CCPs have all the information required to be able to provide the best customer service. I am partnering closely across lines of business to prevent defects, record them, facilitate their resolution."
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

///This is an encapsulation
work.display = function() {
		for (var jobs = 0; jobs < work.jobs.length; jobs++) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkThumbnail);

		
		var formattedEmployer = 
		HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);

		var formattedJobTitle = 
		HTMLworkTitle.replace("%data%", work.jobs[jobs].jobtitle);

		var formattedEmployerJobTitle =
		formattedEmployer + formattedJobTitle;

		$(".thumbnail:last").append(formattedEmployerJobTitle);

		var formattedWorkDates = 
		HTMLworkDates.replace("%data%", work.jobs[jobs].workdates);

		var formattedWorkLocation = 
		HTMLworkLocation.replace("%data%", work.jobs[jobs].worklocation);

		var formattedWorkDatesLocation = formattedWorkDates + formattedWorkLocation;

		$(".thumbnail:last").append(formattedWorkDatesLocation);

		var formattedWorkDescription = 
		HTMLworkDescription.replace("%data%", work.jobs[jobs].workdescription);
		
		$(".thumbnail:last").append(formattedWorkDescription);
	};
};

work.display();

var project = {
	"projects": [
	{
		"projecttitle": "Classic Arcade Game Clone",
		"projectdate": "Ongoing",
		"projectdescription" : "I have used HTML5 and CSS3 to develop a responsive website to display the portfolio projects I will build!"
	},
	{
		"projecttitle": "My Online Resume",
		"projectdate": "November 2016",
		"projectdescription" : "Create an online resume using HTML5, CSS3, JavaScript, and jQuery."
	},
	{
		"projecttitle": "My Portfolio",
		"projectdate": "October 2016",
		"projectdescription" : "I have used HTML5 and CSS3 to develop a responsive website to display the portfolio projects I will build!"
	}
	]
};

///This is an encapsulation
project.display = function() {
		for (var projects = 0; projects < project.projects.length; projects++) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectThumbnail);

		var formattedProjectTitle = 
		HTMLprojectTitle.replace("%data%", project.projects[projects].projecttitle);
		
		$(".thumbnail:last").append(formattedProjectTitle);

		var formattedProjectDates = 
		HTMLprojectDates.replace("%data%", project.projects[projects].projectdate);

		$(".thumbnail:last").append(formattedProjectDates);

		var formattedProjectDescription =
		HTMLprojectDescription.replace("%data%", project.projects[projects].projectdescription);

		$(".thumbnail:last").append(formattedProjectDescription)
	};
};

project.display();

var education = { 
	"schools": [
	{
		"schoolname": "University of Caen Lower Normandy",
		"schooldates": "2009 - 2012",
		"schoollocation": "Caen, Lower Normandy, FRANCE",
		"schooldegree": "Bachelor",
		"schoolmajor" : "Foreign Languages (French, English, Italian, Spanish) with Economics & International Business"
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
			"onlinedescription": "Through a project-based approach combined with code reviews from professional developers, the program teaches the fundamentals of how the web works and provides a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript. The program leads you to being job-ready for an entry-level job as a Front-End Web Developer. Skills developed: Responsive Web Design Fundamentals, Responsive Images, jQuery, Object-Oriented JavaScript, HTML5 Canvas, Browser Rendering and Website Performance Optimization, Chrome Dev Tools, MVC-MVVM, JavaScript Design Patterns, KnockOut.js, JavaScript testing with Jasmine, Version Control with Git and GitHub.",
			"onlineurl" : "www.udacity.com"
		}
	]
};

///This is an encapsulation
education.display = function() {
	for (var schools = 0; schools < education.schools.length; schools++) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolThumbnail);

		var formattedSchoolName = 
			HTMLschoolName.replace("%data%", education.schools[schools].schoolname);

		var formattedSchoolDegree = 
			HTMLschoolDegree.replace("%data%", education.schools[schools].schooldegree);

		var formattedSchoolNameDegree = 
		formattedSchoolName + formattedSchoolDegree;
		
		$(".thumbnail:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = 
			HTMLschoolDates.replace("%data%", education.schools[schools].schooldates);

		$(".thumbnail:last").append(formattedSchoolDates);

		var formattedSchoolLocation = 
			HTMLschoolLocation.replace("%data%", education.schools[schools].schoollocation);

		$(".thumbnail:last").append(formattedSchoolLocation);
		
		var formattedSchoolMajor = 
		HTMLschoolMajor.replace("%data%", education.schools[schools].schoolmajor);

		$(".thumbnail:last").append(formattedSchoolMajor);
	};
		

		for (onlineclasses in education.onlineclass) {
		$("#education").append(HTMLonlineStart);
		$(".online-entry:last").append(HTMLonlineClasses);
		$(".online-entry:last").append(HTMLonlineClassesThumbnail);
		$(".thumbnail:last").append(HTMLschoolStart);
		var formattedOnlineTitle = 
		HTMLonlineTitle.replace("%data%", education.onlineclass[onlineclasses].onlinetitle);
		var formattedOnlineSchool = 
		HTMLonlineSchool.replace("%data%", education.onlineclass[onlineclasses].onlineschool);		
		var formattedOnlineTitleOnlineSchool = (formattedOnlineTitle + formattedOnlineSchool);
		$(".thumbnail:last").append(formattedOnlineTitleOnlineSchool);

		var formattedOnlineDates = 
		HTMLonlineDates.replace("%data%", education.onlineclass[onlineclasses].onlinedates);

		$(".thumbnail:last").append(formattedOnlineDates);

		var formattedOnlineURL = 
		HTMLonlineURL.replace("%data%", education.onlineclass[onlineclasses].onlineurl);

		$(".thumbnail:last").append(formattedOnlineURL);
	};
};

education.display();


//Give me the click location on the page
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks (x,y);
});

// $("#main").append(internationalizeButton);

// //Capitalize my Lastname
// var inName = function(name) {
// 	name = name.split(" ");
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return name[0]+" "+name[1];
// };

//Display map
$("#mapDiv").append(googleMap);


