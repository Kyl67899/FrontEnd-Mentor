const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const fname = document.getElementsByClassName('fname');
  const lname = document.getElementsByClassName('lname');
  const emailAddress = document.getElementsByClassName('email');
  const dot = document.getElementsByClassName('dot');
  const dot2 = document.getElementsByClassName('dot2');

  if (fname.value === "") {
    alert("Please enter your First Name.");
    fname.focus();
    fname.textContent = "You need to enter your first name";
    return false;
  }

  if (lname.value === "") {
    alert("Please enter your Last Name.");
    lname.focus();
    lname.textContent = "You need to enter your last name";
    return false;
  }
    
  if (email.value === "") {
    // alert("Please enter your email address.");
    email.focus();
    email.textContent = "You need to enter a valid email address";
    return false;
  }

  if (!emailIsValid(emailAddress.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
  }

  if (dot.value === "" || dot2.value === "") {
    alert("Please select a query");
    emailAddress.focus();
    return false;
  }
  
  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

function submit(){
    console.log("Submit");
}