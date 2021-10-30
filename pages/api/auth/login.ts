import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {API_URL} from 'utils/_constants';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.post(`${API_URL}auth/sign-in`, req.body);
    const token = response.data.token;
    res.status(200).json({data: {token}});
  } catch (error: any) {
    if (error.response) {
      res.status(200).json({error: error.response.data.message});
    } else {
      res.status(200).json({});
    }
  }
};

export default login;
