const FormateDate = (date) => {
	date = date
		.toLocaleString('en-IN', {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
		})
		.replaceAll('-', ' ');

	return date;
};

export default FormateDate;
