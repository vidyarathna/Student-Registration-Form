var Fname = document.getElementById('fname')
var Lname= document.getElementById('lname')
var Email = document.getElementById('email')
var Phone = document.getElementById('phone')
var Website = document.getElementById('website')
var btn = document.getElementById('btn');
var cards = document.querySelector('.cards');
var Male = document.getElementById('male')
var Female = document.getElementById('female')
var java = document.getElementById('java')
var cpp = document.getElementById('c++')
var pyhton = document.getElementById('python')
var other = document.getElementById('other')
var form = document.querySelector('form');
let selectImage;


btn.addEventListener('click', function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  if (!Fname.value||!Lname.value || !Email.value || !Phone.value) {
    alert('ERROR: Please enter all fields!')
  }
  else {
    cards.innerHTML += `
  <div class="card">
  <div class="card-body">
  <h1 class="title">Name : ${Fname.value} ${Lname.value}</h1>
 
  <p class="text">Email : ${Email.value}</p>
  <p class="text">Phone no :${Phone.value}</p>
  <p class="text">Website : ${Website.value}</p>
  <p class="text">Skill : ${values} </p>
   <p class="text">Gender : ${Male.checked ? Male.value : Female.checked ? Female.value : 'Others'}</p>
  
  </div>`

    alert('!!Student Details Submitted Successfully!!')
    form.reset()
  }
});
