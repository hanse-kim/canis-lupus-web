import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {CategoryInfo} from 'types/domain';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const categoryList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const axiosResponse = await axios.get<CategoryInfo[]>(
        `${API_URL}/categories`
      );
      res.status(200).json(axiosResponse.data);
    } else {
      throw new Error('allowed method: GET');
    }
  } catch (e: any) {
    res.status(500).json({
      message: getCommonError(e),
    });
  }
};

export default categoryList;
