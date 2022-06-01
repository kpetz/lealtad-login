import axios from 'axios';

export default async function verifyLogin(credentials) {
	return axios({
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'post',
		url: `https://www.mecallapi.com/api/login`,
		data: {
			username: credentials.username,
			password: credentials.password
		}
	})
		.then(response => {
			return response.data;
		}).catch(error => {
			return error;
		});
}