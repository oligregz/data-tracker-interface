import axios from "axios"

const postUser = async (object) => {
  try {
    const url = `https://data-tracker-api.onrender.com/users`
    const res = await axios.post(url, object)
    if (!res.data) throw new Error("Error create user");
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}

export default postUser