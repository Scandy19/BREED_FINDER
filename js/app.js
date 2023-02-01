
// ------------------------------------------
//  ADD YOUR FETCH FUNCTIONS & CODE
// ------------------------------------------

const select = document.getElementById('breed');
const card = document.querySelector('.cards');

function dogImages() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            card.innerHTML += `<img src="${data.message}"/>`;
    }) 
}
dogImages();


// ------------------------------------------
//  ADD YOUR CODE TO REPLACE BELOW WITH THE BREED LIST FROM THE API
// ------------------------------------------
function fetchData(url){
    return fetch(url)
        .then(res => res.json())
};

fetchData('https://dog.ceo/api/breeds/list')
    .then (data => generateOptions(data.message))

    function generateOptions(data){
        const listItems = data.map( item => `
            <option value='${item}'>${item}</option>
    
        `).join('');
    select.innerHTML = listItems; 
    }

    function images(data){
        const h = `<img src='${data}' alt>`;
        card.innerHTML = h;
        alert(data);
    }
    
    function breedImages(){
        const breeds = select.value;
        const img = card.querySelector('img');    
        fetchData(`https://dog.ceo/api/breed/${breeds}/images/random`)
            .then(data => {
                img.src = data.message;
                img.alt = breeds;
        });
    
    }
    
    select.addEventListener('change', breedImages);


// select.innerHTML = " <option value='Breed 1'>Breed 1</option>" +
//     " <option value='Breed 2'>Breed 2</option>" +
//     "<option value='Breed 3'>Breed 3</option>";

