var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experianceElement = document.getElementById('experiance');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experiance = experianceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong.Name:</strong>".concat(name_1, "</p>\n  <p><strong.email:</strong>").concat(email, "</p>\n    <p><strong.phone:</strong>").concat(phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n           <h3>Experiance</h3>\n      <p>").concat(experiance, "</p>\n           <h3>skills</h3>\n      <p>").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("the resumeoutput element is missing");
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
