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
var teacherObj = {
    name: "Professor Oak",
    department: "Pokemon and Us",
    ratings: [4.3, 3.2, 4.9],
    addRating: function(newRating) {
        // "this" used here is a javascript shortcut to reference the
        // object that owns this function. and therefore, also provides
        // quick access to the owning objects other properties and functions
        // such as the ratings array property
        this.ratings.push(newRating);
    },
    getAvgRating: function() {
        var sum = 0;
        for (var i = 0; i < this.ratings.length; i++) {
            sum = sum + this.ratings[i];
        }
        if (this.ratings.length > 0) {
            var teacherAvgRating = sum / this.ratings.length;
            teacherAvgRating = Math.round(teacherAvgRating * 10) / 10;
            return teacherAvgRating;
        } else {
            return 0;
        }
    }
};

function promptForFourthAssignment() {
    var userRating = window.prompt("Please enter numeric teacher rating");

    // if not a number, try again
    // The "isNaN" is a built-in browser function to test a string to see if
    // it is numeric.   If the string is Not-a-Number (NaN), then it returns true.
    if(isNaN(userRating)) {
        promptForFourthAssignment();
    }

    // convert user entered string to number and reassign to same variable
    userRating = (userRating * 10)/ 10;

    // print existing teacherObj average rating to console (before adding new rating)
    console.info("Old teacher rating was " + teacherObj.getAvgRating());



    // Add rating to teacher object
    teacherObj.addRating(userRating);

    // print new teacherObj average rating to console (after adding new rating)
    console.info("New teacher rating is " + teacherObj.getAvgRating());
}

// prompt user
promptForFourthAssignment()

//Step 4
var teacher1 = {
    name: "Professor Oak",
    department: "Pokemon and Us",
    ratings: [4.3, 3.2, 4.9],
    addRating: function (newRating) {
        // "this" used here is a javascript shortcut to reference the
        // object that owns this function. and therefore, also provides
        // quick access to the owning objects other properties and functions
        // such as the ratings array property
        this.ratings.push(newRating);
    },
    getAvgRating: function () {
        var sum = 0;
        for (var i = 0; i < this.ratings.length; i++) {
            sum = sum + this.ratings[i];
        }
        if (this.ratings.length > 0) {
            var teacherAvgRating = sum / this.ratings.length;
            teacherAvgRating = Math.round(teacherAvgRating * 10) / 10;
            return teacherAvgRating;
        } else {
            return 0;
        }
    }
};
var teacher2 = {
    name: "Professor Maple",
    department: "Professor Department 2",
    ratings: [2.3, 1.2, 1.9],
    addRating: function (newRating) {
        // "this" used here is a javascript shortcut to reference the
        // object that owns this function. and therefore, also provides
        // quick access to the owning objects other properties and functions
        // such as the ratings array property
        this.ratings.push(newRating);
    },
    getAvgRating: function () {
        var sum = 0;
        for (var i = 0; i < this.ratings.length; i++) {
            sum = sum + this.ratings[i];
        }
        if (this.ratings.length > 0) {
            var teacherAvgRating = sum / this.ratings.length;
            teacherAvgRating = Math.round(teacherAvgRating * 10) / 10;
            return teacherAvgRating;
        } else {
            return 0;
        }
    }
};
var teacher3 = {
    name: "Professor Apple",
    department: "Professor Department 3",
    ratings: [4.9, 3.4, 1.1],
    addRating: function (newRating) {
        // "this" used here is a javascript shortcut to reference the
        // object that owns this function. and therefore, also provides
        // quick access to the owning objects other properties and functions
        // such as the ratings array property
        this.ratings.push(newRating);
    },
    getAvgRating: function () {
        var sum = 0;
        for (var i = 0; i < this.ratings.length; i++) {
            sum = sum + this.ratings[i];
        }
        if (this.ratings.length > 0) {
            var teacherAvgRating = sum / this.ratings.length;
            teacherAvgRating = Math.round(teacherAvgRating * 10) / 10;
            return teacherAvgRating;
        } else {
            return 0;
        }
    }
};
var course1 = {
    name: "Pokemon and Us",
    department: "POKEDEX BASICS",
    teacher: teacher2
};
var course2 = {
    name: "Pokemon and Us",
    department: "POKEDEX BASICS",
    teacher: teacher1
};
var course3 = {
    name: "Poke Berries",
    department: "POKE HEALTH",
    teacher: teacher2
};
var course4 = {
    name: "Poke Medicine",
    department: "POKE HEALTH",
    teacher: teacher3
};
var course5 = {
    name: "Breeding Patterns",
    department: "EGGS AND HATCHING",
    teacher: teacher1
};
var course6 = {
    name: "Pokemon Law",
    department: "ACADEMY TRAINING",
    teacher: teacher2
};
var course7 = {
    name: "Evolution",
    department: "ANCIENT POKEMON",
    teacher: teacher1
};

var availableCourses = [
    course1,
    course2,
    course3,
    course4,
    course5,
    course6,
    course7
];

// redefine filterCourses function
/*
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
 */
function filterCourses(coursesArray, departmentName) {
    var matches = [];
    for (var i = 0; i < coursesArray.length; i++) {
        var course = coursesArray[i];

        // check if course's department is requested department
        if (course.department.toUpperCase() === departmentName.toUpperCase()) {
            matches.push(course);
        }
    }
    console.log("Our filter found " + matches.length + " courses for department: " + departmentName);
    return matches;
}

function findCoursesByDepartment() {

    var departmentName = window.prompt("Please enter a department name (Pokedex Basics, Poke Health, Eggs and Hatching, Academy Training, or Ancient Pokemon)");

    var courses = filterCourses(availableCourses, departmentName);

    var matchString = '';
    var commaString = '';
    for (var i = 0; i < courses.length; i++) {
        var course = courses[i];
        matchString = matchString + commaString + course.name;
        commaString = ', ';
    }

    if(matchString.length > 0) {
        window.alert("You can choose from one of the following courses: \n\n" + matchString);
    } else {
        window.alert("The department name did not match any courses on record.  Please refresh browser and try again");
    }
}

// prompt user to enter department
findCoursesByDepartment()
