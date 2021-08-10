import {NextApiRequest, NextApiResponse} from 'next';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({success: true, token: 'this_is_test_token'});
};

export default login;
