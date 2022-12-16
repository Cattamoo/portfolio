export function age(_birthday) {
	const date = new Date();
	const birthday = new Date(_birthday);
	const thisYearBirthday = new Date(date.getFullYear(), birthday.getMonth(), birthday.getDate())
	return date.getFullYear() - birthday.getFullYear() + (thisYearBirthday > date ? -1 : 0);
}