const contactForm = document.querySelector('.login-form');
const onFormSubmit = (event) => {
	event.preventDefault();
	const formEl = event.currentTarget.elements;
	const info = {
		email: formEl.email.value,
		password: formEl.password.value,
	}
		console.log(info);
	contactForm.reset();
}
contactForm.addEventListener('submit', onFormSubmit);
