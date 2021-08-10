import {NextApiRequest, NextApiResponse} from 'next';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({success: true});
};

export default logout;
