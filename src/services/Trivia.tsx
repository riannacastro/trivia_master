import axios from 'axios';

const baseURL = 'https://opentdb.com/api.php?amount='
export const getQuestionList = async (
  amount: number,
  difficulty: string
) : Promise<any> => {
  try {
    const resp = await axios.get(`${baseURL}${amount}&difficulty=${difficulty}&type=multiple`);
    console.log(resp.data)
    return resp.data.result
  }
  catch {
    throw new Error('Error fetching questions.')
  }
}