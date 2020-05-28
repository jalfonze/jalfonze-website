function emailValidate(email) {
	return email.includes('@');
}

function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message')

	let emailText = emailInput.value
	let messageText = messageInput.value;

	if(emailValidate(emailText) !== true) {
		console.log('This is currently unavailable');
		return false;
	}
	alert('This is currently unavailable');
}

let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', clickListener);