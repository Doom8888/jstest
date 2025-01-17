let names = ['Victor', 'Andrey', 'Olga', 'Alex', 'Mike'];

let object = [
    { name: 'mike', age: 24, }
];
/*
for (let i = 0; i < names.length; i++) {
    document.querySelector('.list').innerHTML += `<li>${names[i]}</li>`;
}*/

for (let key in object) {
    document.querySelector('.list').innerHTML += `<li>${object[key].name}</li>`;
}


document.querySelector('#form').onclick = function(e) {
    e.preventDefault();

    let test = document.querySelector('#test')

    document.querySelector('#result').innerText = test.value

    test.value = '';

    //console.log(e);
};

document.querySelector('.block').onclick = function() {
    this.classList.toggle('red');
}

document.querySelector('#add').onclick = function (e) {
    e.preventDefault();

    let gadjet = document.querySelector('#gadjet'),
        element = document.querySelector('#element');

    let li = document.createElement('li');

       if(element.value != '') {            

            li.innerText = element.value;
        
            gadjet.appendChild(li);            
        }    

    element.value = ''
}

const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    console.log(formData)


    fetch('https://example.com/api', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was a problem with your submission: ' + error.message);
    });
  });