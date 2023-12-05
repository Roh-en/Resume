function printPdf() {
    var content = document.getElementById("resume");
  
    const allButtons = document.querySelectorAll("#print button");
    allButtons.forEach(button => {
        button.classList.add("none");
    });
    let allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach(input => {
        input.classList.add("none");
    })
  
  allButtons.forEach(button => {
      button.classList.remove("none");
  })
  allInputCheckboxes.forEach(input => {
      input.classList.remove("none");
  })
  
    html2pdf(content, {
        html2canvas: { scale: 1, logging: true, dpi: 500 }
    });
  }
  
  function addedu() {
    const head = document.createElement('div');
    document.getElementById("education").appendChild(head);
    head.innerHTML = (
      '<div class="edublock"> \
          <span><input type="checkbox" class="input-checkbox"></span> \
          <span id = "spanDegreeId2" class="education-head" contenteditable="true">YOUR DEGREE</span> \
          <div > \
              <span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span> \
          </div> \
      </div>');
    saveResume();
  }
  function remedu(event) {
    let val = 0;
    let empty = true;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveResume();
  }
  
  function addskill() {
    const head = document.createElement('div');
    document.getElementById("skills").appendChild(head);
    head.innerHTML = ('<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">Write your skill here</span></div>');
    saveResume();
  }
  
  function remskill(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveResume();
  }
  
  function addLang() {
    const head = document.createElement('div');
    document.getElementById("languages").appendChild(head);
    head.innerHTML = ('<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span> - <span contenteditable="true">Proficiency Level %</span></div>');
    saveResume();
  }
  function remLang(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveResume();
  }
  
  function addAch() {
    const head = document.createElement('div');
    document.getElementById("achievement").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievements</span></div>');
    saveResume();
  }
  function remAch(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveResume();
  }
  
  function addInt() {
    const head = document.createElement('div');
    document.getElementById("interest").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your interests</span></div>');
    saveResume();
  }
  function remInt(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveResume();
  }
  
  let maxNewSection = 1;
  function addsec() {
    if (maxNewSection < 2) {
        const head = document.createElement('div');
        document.getElementById("newsec").appendChild(head);
        if (maxNewSection === 0) {
            head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }
        else {
            head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }
  
        maxNewSection = maxNewSection + 1;
    }
    else {
        alert("Atmost 2 NEW SECTION can be added!")
  
    }
    saveResume();
  }
  function remsec(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                maxNewSection = maxNewSection - 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveResume();
  }
  
  function saveResume() {
  
    var sec = document.getElementById("print");
    value1 = sec.innerHTML;
    var info = document.getElementById("custinfo");
    info.value = value1;
  }
  
  function saveToDB() {
  
      var spanFnameVal = document.getElementById('spanFnameId').innerHTML;
      var spanLnameVal = document.getElementById('spanLnameId').innerHTML;
      var spanJobVal = document.getElementById('spanJobId').innerHTML;
      var spanPhoneVal = document.getElementById('spanPhoneId').innerHTML;
      var spanEmailVal = document.getElementById('spanEmailId').innerHTML;
      var spanLinkedinVal = document.getElementById('spanLinkedinId').innerHTML;
      var spanLocationVal = document.getElementById('spanLocationId').innerHTML;
      var spanSkillVal = document.getElementById('spanSkillId1').innerHTML;
      var spanLangVal = document.getElementById('spanLangId1').innerHTML;
      var spanAchieveVal = document.getElementById('spanAchieveId1').innerHTML;
      var spanInterestVal = document.getElementById('spanInterestId1').innerHTML;
      var spanDegreeVal = document.getElementById('spanDegreeId1').innerHTML;
      var spanWorkVal = document.getElementById('spanWorkId1').innerHTML;
      var spanProjectVal = document.getElementById('spanProjectId1').innerHTML;
  
      // Create a new XMLHttpRequest object
      var xhr = new XMLHttpRequest();
  
      // Configure it: POST-request for the URL /saveToDatabase.php
      xhr.open('POST', 'saveToDatabase.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*'); // Adjust this based on your server's CORS configuration
  
      // Send the request with the name as a parameter
      xhr.send(
          'userFname=' + encodeURIComponent(spanFnameVal) + 
          '&userLname=' + encodeURIComponent(spanLnameVal) + 
          '&userJob=' + encodeURIComponent(spanJobVal) + 
          '&userPhone=' + encodeURIComponent(spanPhoneVal) + 
          '&userEmail=' + encodeURIComponent(spanEmailVal) + 
          '&userLinkedin=' + encodeURIComponent(spanLinkedinVal) + 
          '&userLocation=' + encodeURIComponent(spanLocationVal) + 
          '&userSkill=' + encodeURIComponent(spanSkillVal) + 
          '&userLang=' + encodeURIComponent(spanLangVal) +
          '&userAchieve=' + encodeURIComponent(spanAchieveVal) + 
          '&userInterest=' + encodeURIComponent(spanInterestVal) + 
          '&userDegree=' + encodeURIComponent(spanDegreeVal) + 
          '&userWork=' + encodeURIComponent(spanWorkVal) + 
          '&userProject=' + encodeURIComponent(spanProjectVal) 
      );
      
      // This will be called after the response is received
      xhr.onload = function() {
          if (xhr.status == 200) {
              // Handle the response from the server (if needed)
              console.log(xhr.responseText);
          }
      };
  }