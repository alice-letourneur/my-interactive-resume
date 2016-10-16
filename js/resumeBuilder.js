var bio = {
	"header":{
		"name": "Alice Letourneur",
		"role": "Front-End Developer",
		"contact": {
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
	HTMLmobile.replace("%data%", bio.header.contact.mobile);

var formattedEmail = 
	HTMLemail.replace("%data%", bio.header.contact.email);

var formattedGithub = 
	HTMLgithub.replace("%data%", bio.header.contact.github);

var formattedLocation = 
	HTMLlocation.replace("%data%", bio.header.contact.location);

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

$("#workExperience").prepend(HTMLworkStart);

var work = { 
	"jobs": [
	{
		"jobtitle": "Project Analyst",
		"employer": "American Express",
		"workdates": "2012 - 2016",
		"worklocation": "Brighton, UK"
	},
	{
		"jobtitle": "Subject Matter Expert",
		"employer": "American Express",
		"workdates": "2012 - 2016",
		"worklocation": "Brighton, UK"
	}
	]
};

var formattedEmployer = 
	HTMLworkEmployer.replace("%data%", work.jobs[0].employer);

var formattedJobTitle = 
	HTMLworkTitle.replace("%data%", work.jobs[0].jobtitle);

var formattedWorkDates = 
	HTMLworkDates.replace("%data%", work.jobs[0].workdates);

var formattedWorkLocation = 
	HTMLworkLocation.replace("%data%", work.jobs[0].worklocation);

$("#workExperience").append(formattedEmployer + formattedJobTitle);
$("#workExperience").append(formattedWorkDates + formattedWorkLocation);

var formattedEmployer = 
	HTMLworkEmployer.replace("%data%", work.jobs[1].employer);

var formattedJobTitle = 
	HTMLworkTitle.replace("%data%", work.jobs[1].jobtitle);

var formattedWorkDates = 
	HTMLworkDates.replace("%data%", work.jobs[1].workdates);

var formattedWorkLocation = 
	HTMLworkLocation.replace("%data%", work.jobs[1].worklocation);

$("#workExperience").append(formattedEmployer + formattedJobTitle);
$("#workExperience").append(formattedWorkDates + formattedWorkLocation);

$("#education").prepend(HTMLschoolStart);

var education = { 
	"schools": [
	{
		"schoolname": "Udacity",
		"schooldates": "2016 - Today",
		"schoollocation": "Online"
	},
	{
		"schoolname": "University of Caen Lower Normandy",
		"schooldates": "2009 - 2012",
		"schoollocation": "Caen, Lower Normandy, FRANCE"
	}
	]
};

var formattedSchoolName = 
	HTMLschoolName.replace("%data%", education.schools[0].schoolname);

var formattedSchoolDates = 
	HTMLschoolDates.replace("%data%", education.schools[0].schooldates);

var formattedSchoolLocation = 
	HTMLschoolLocation.replace("%data%", education.schools[0].schoollocation);

$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);

var formattedSchoolName = 
	HTMLschoolName.replace("%data%", education.schools[1].schoolname);

var formattedSchoolDates = 
	HTMLschoolDates.replace("%data%", education.schools[1].schooldates);

var formattedSchoolLocation = 
	HTMLschoolLocation.replace("%data%", education.schools[1].schoollocation);

$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);