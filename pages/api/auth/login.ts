import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {UserToken} from 'types/auth';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const axiosResponse = await axios.post<UserToken>(
        `${API_URL}/auth/sign-in`,
        req.body
      );
      const token = axiosResponse.data.token;
      res.status(200).json({token});
    } else {
      throw new Error('allowed method: POST');
    }
  } catch (e: any) {
    res.status(500).json({
      message: getCommonError(e),
    });
  }
};

export default login;
