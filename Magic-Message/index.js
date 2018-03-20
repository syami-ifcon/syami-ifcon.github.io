 // 1. Get the <form> element
form = document.querySelector('#create-form');
// console.log(form)
// 2. Event Listen when form has been submitted
// // 2.1 Prevent the default behavior of form submission
form.onsubmit = function (event) {
	event.preventDefault();

// // 2.2 Get the value of <input> elements
Msg = document.querySelector('#input-msg').value;
Img = document.querySelector('#input-img').value;

// // 2.3 Concatenate the URL string
homeUrl = "file:///C:/Users/shabu/OneDrive/Documents/BootCamp/Magic-Message/message.html"

url = homeUrl + "?img-url=" + Img + "&msg=" +  Msg
console.log(url); 
paragraph = document.querySelector('#share-url');
paragraph.innerHTML = url;

}
// // 2.4 Get the <p> element and change it's value to the URL string
const pets = ['parrot', 'siamese cat', 'miniature schnauzer', 'hare', 'peacock fish'];
const index = Math.random() * 5;
console.log(pets[index]);