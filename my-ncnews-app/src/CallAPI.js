import axios from 'axios'

const BASE_URL = 'https://nc-news-stack.herokuapp.com/api'

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`)
  console.log(data.articles)
  return data.articles
}
export const getArticleById = async id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}`)
  return data.article
}

export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`)
  console.log(data.users)
  return data.users
}

export const getUserById = async id => {
  const { data } = await axios.get(`${BASE_URL}/users/${id}`)
  return data.user
}
