// List from API
let breedList;

// Where you choose the breed in drop down
const chooseBreedButton = $('button');

// Getting the image
chooseBreedButton.on('click', handleClick);

// Pulling the Breed List from API
$.ajax('https://dog.ceo/api/breeds/list/all')
.then(function(data) {
  breedList = Object.keys(data.message)
  generateOptTags();
  }, 
function(error) {
  console.log(error)
});

// Picking the breed from list
function generateOptTags() {
  const optionTags = breedList.map(function(breed) {
    return `
      <option value="${breed}">${breed}</option>
      `;
  });
  
  $('select').html(optionTags);
}

// Pulling the image and into another window.
function handleClick() {
  const value = $('option:selected').val();
  $.ajax('https://dog.ceo/api/breed/'+ value +'/images')
  .then(function(data) {
    const link = $(`<a href="${data.message[0]}" target="_blank">Click to boop good pup!</a>`)
    $('body').append(link)
  }, function(error) {
      console.log(error)
  })
}