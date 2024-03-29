const submitHandler = (e, values, setValid, setValues, setContacts) => {
	const { firstName, lastName, email, number } = values;
	e.preventDefault();
	if (!firstName || !lastName || !email || !number) {
		setValid(false);
		return;
	} else {
		setValid(true);
		setContacts((contacts) => [{ ...values, id: String(Math.random() * values.number) + values.firstName }, ...contacts]);
		setValues({
			firstName: "",
			lastName: "",
			email: "",
			number: "",
		});
	}
};
const changeHandler = (e, setValues) => {
	const { name, value } = e.target;
	setValues((values) => ({ ...values, [name]: value }));
};
export { submitHandler, changeHandler };
