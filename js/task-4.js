const contactForm = document.querySelector('.login-form');
const onFormSubmit = (event) => {
	event.preventDefault();
	const formEl = event.currentTarget.elements;
	const info = {
		email: formEl.email.value.trim(),
		password: formEl.password.value.trim(),
	}
		if (info.email === "" || info.password === "") {
		alert('All form fields must be filled in')
	} 
			console.log(info);
		
	contactForm.reset();
}
contactForm.addEventListener('submit', onFormSubmit);
 