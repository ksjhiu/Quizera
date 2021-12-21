function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "sec.html";
console.log(name);
}
let user_name = sessionStorage.getItem("name");
document.querySelector("span.name").innerHTML = user_name;


