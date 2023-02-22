const FormateDate = (date) => {
	date = date
		.toLocaleString('en-IN', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		})
		.replaceAll('-', ' ');

	return date;
};

export default FormateDate;
