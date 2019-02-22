import axios from 'axios';

const BASE_URL = 'https://nc-news-stack.herokuapp.com/api';

export const getArticles = async () => {
	const {data} = await axios.get(`${BASE_URL}/articles`);
	// console.log(data.articles)
	return data.articles;
};
export const getArticleById = async id => {
	const {data} = await axios.get(`${BASE_URL}/articles/${id}`);
	return data.article;
};

export const getUsers = async () => {
	const {data} = await axios.get(`${BASE_URL}/users`);
	console.log(data.users);
	return data.users;
};

export const getUserById = async id => {
	const {data} = await axios.get(`${BASE_URL}/users/${id}`);
	// console.log(data.users[0])
	return data.users[0];
};
export const getComments = async id => {
	const {data} = await axios.get(`${BASE_URL}/articles/${id}/comments`);
	// console.log(data.comments)
	return data.comments;
};

export const voteOnArticle = (voteChange, id) => {
	return axios({
		method: 'PATCH',
		url: `${BASE_URL}/articles/${id}`,
		data: {
			inc_votes: voteChange
		}
	}).then(({data: {article}}) => article);
};

// export const voteOnComment = (voteChange, id, comid) => {
//   return axios({
//     method: 'PATCH',
//     url: `${BASE_URL}/articles/${id}/comments/${comid}`,
//     data: {
//       inc_votes: voteChange
//     }
//   }).then(({ data: { comment } }) => comment)
// }

export const getTopics = async () => {
	const {data} = await axios.get(`${BASE_URL}/topics`);
	console.log(data.topics);
	return data.topics;
};

export const getArticlesByTopicId = async id => {
	const {data} = await axios.get(`${BASE_URL}/topics/${id}/articles`);
	return data.articles;
};

export const sortArticles = async criteria => {
	const {data} = await axios.get(`${BASE_URL}/articles?sort_by=${criteria}`);
	return data.articles;
};

// export const removeArticle = async id => {
//   const { data } = await axios.delete(`${BASE_URL}/articles/${id}`)
//   return data
// }
