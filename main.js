console.log("This file is linked!");
var teacherName = "Professor Oak";
var department = "Pokemon and Us";
var rating1 = 4.3;
var rating2 = 3.2;
var rating3 = 4.9;
console.log("Teacher: " + teacherName + "\n" + "Department: " + department + "\n" + rating1 + ", " + rating2 + ", " + rating3);
var avgRating = (4.3+3.2+4.9) / 3;
var avgRating= Math.round(10 *avgRating) / 10;
console.log(avgRating);

var studentName = "Ash";
var major = "Pokemon Trainer";
var buddy = "Pikachu";
console.log("Student Name: " + studentName + "\n" + "Major: " + major + "\n" + "Buddy: " + buddy);

var courseName = "Pokemon and Us";
var courseTeacher = "Oak";
var semester = "2017/2018";
console.log("Course: " + courseName + "\n" + "Teacher: " + "\n" + semester);

var teacherRatings = [3.9, 4.3, 5.0];


        function getRatingAvg(arrayOfRatings) {
            var sum = 0;
            for (var i = 0; i < arrayOfRatings.length; i++) {
                sum = sum + arrayOfRatings[i];
            }
            if (arrayOfRatings.length > 0) {
                var teacherAvgRating = sum / arrayOfRatings.length;
                teacherAvgRating = Math.round(teacherAvgRating * 10) / 10;
                return teacherAvgRating;
            } else {
                return 0;
            }
        }
        function addTeacherRating(arrayOfRatings, newRating) {
            arrayOfRatings.push(newRating);
            return arrayOfRatings;
        }

        function onAddRating() {
            var response = window.prompt("We would like for you to review.   Please enter a rating between 0.0 - 5.0?");
            var responseAsNumber = parseFloat(response);
            if (isNaN(responseAsNumber) || responseAsNumber < 0 || responseAsNumber > 5) {
                onAddRating();
            } else {
                teacherRatings = addTeacherRating(teacherRatings, responseAsNumber);
                window.alert("Thanks for your review!   " + teacherName + " average rating is now " + getRatingAvg(teacherRatings) + ".");
            }
        }

        console.log(getRatingAvg(teacherRatings));
        console.log(addTeacherRating(teacherRatings, 4.5));
        console.log(onAddRating());

        availableCourses = [
            ["Pokemon and Us", "POKEDEX BASICS"],
            ["Poke Berries", "POKE HEALTH"],
            ["Poke Medicine", "POKE HEALTH"],
            ["Breeding Patterns", "EGGS AND HATCHING"],
            ["Pokemon Law", "ACADEMY TRAINING"],
            ["Evolution", "ANCIENT POKEMON"],
        ]

        function filterCourses(coursesArray, departmentName) {
            var matches = [];
            for (var i = 0; i < coursesArray.length; i++) {
                var course = coursesArray[i];
                if (course[1] === departmentName) {
                    matches.push(course);
                }
            }
            console.log("Our filter found " + matches.length + " courses for department: " + departmentName);
            return matches;
        }

        function onFindClass() {

            var departmentName = window.prompt("Please enter a department name (Pokedex Basics, Poke Health, Eggs and Hatching, Academy Training, or Ancient Pokemon)");

            departmentName = departmentName.toUpperCase();
            if (departmentName === 'POKEDEX BASICS' || departmentName === 'POKE HEALTH' || departmentName === 'EGGS AND HATCHING' || departmentName === 'ACADEMY TRAINING' || departmentName === 'ANCIENT POKEMON') {
                var courses = filterCourses(availableCourses, departmentName);

                var matchString = '';
                var commaString = '';
                for (var i = 0; i < courses.length; i++) {
                    matchString = matchString + commaString + courses[i][0];
                    commaString = ', ';
                }
                window.alert("You can choose from one of the following courses: \n\n" + matchString);
            } else {
                onFindClass();
            }
        }

console.log(filterCourses(availableCourses));
console.log(onFindClass());


// JS 3 assigment begins

var welcomeCollegeStudent = function(classLevel) {
  window.alert("Welcome " + classLevel + "!");
};
var welcomeHsStudent = function(classLevel) {
    window.alert("You're still a "+ classLevel + " in high school!");
};

var gradDate = function(gradMonth, gradYear) {
    return gradMonth + " " + gradYear;
};

function welcomeStudentsByGraduatingClass(gradDate, welcomeFx) {
    var classRank = '';

    // this is not a good way of doing it, but keeping it basic
    if(gradDate==='December 2017'|| gradDate==='May 2017' || gradDate==='December 2021'|| gradDate==='May 2021') {
        classRank = 'Senior';
    } else if(gradDate==='December 2018'|| gradDate==='May 2018' || gradDate==='December 2022'|| gradDate==='May 2022') {
        classRank = 'Junior';
    } else if(gradDate==='December 2019'|| gradDate==='May 2019' || gradDate==='December 2023'|| gradDate==='May 2023') {
        classRank = 'Sophomore';
    } else if(gradDate==='December 2020'|| gradDate==='May 2020' || gradDate==='December 2024'|| gradDate==='May 2024') {
        classRank = 'Freshman';
    }

    if(classRank!=='') {
        welcomeFx(classRank);
    }
}

function promptUser() {
    var userGradYear = window.prompt("Enter your college graduation year") * 1;
    var userGradMonth = window.prompt("Enter your college graduation month (May or December only)");

    // validate entries
    if (isNaN(userGradYear)
            || (userGradMonth !== 'May' && userGradMonth !== 'December')
            || userGradYear < 2017
            || (userGradYear === 2017 && userGradMonth === 'May')) {

        window.alert('Invalid month or year.  Please hit refresh to try again.');
    } else {

        var gradDateString = gradDate(userGradMonth, userGradYear);

        // and high schooler be college grad years 2022 thru 2026
        if (userGradYear < 2021) { // in colleeg
            welcomeStudentsByGraduatingClass(gradDateString, welcomeCollegeStudent);
        } else if (userGradYear < 2024) { // in high school
            welcomeStudentsByGraduatingClass(gradDateString, welcomeHsStudent);
        } else {  // graduation is way off
            window.alert("whoa, college is some years away...");
        }
    }
}

// kick things off
promptUser();

//next part of assigment
var teacher = {name: "Professor Oak", hometown: "Pallet Town", ratings: teacherRatings, }
