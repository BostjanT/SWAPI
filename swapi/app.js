const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
     getPerson(getData);
});

function getPerson(cb) {
     const url = 'https://swapi.co/api/people/';
     const ajax = new XMLHttpRequest();
     ajax.open('GET', url, true);
     
     ajax.onload = function() {
          if(this.status === 200) {
               cb(this.responseText, showData);
          } else {
               console.log(this.statusText);
          }
     }
     ajax.onerror = function() {
          console.log('disturbance in the force!');
     }
     ajax.send();
}

function getData(response, cb) {
     const data = JSON.parse(response);
     const {name, height, mass, birth_year} = data.results[0];
     cb(name, height, mass, birth_year);
}

function showData(name, height, mass, birth_year) {
     document.getElementById('name').textContent = name;
     document.getElementById('height').textContent = height;
     document.getElementById('mass').textContent = mass;
     document.getElementById('birth_year').textContent = birth_year;
}



