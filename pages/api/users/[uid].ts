import {NextApiRequest, NextApiResponse} from 'next';
import {users} from 'static';

const Static = async (req: NextApiRequest, res: NextApiResponse) => {
  const {uid} = req.query;
  const user = users.filter((item) => item._id === uid)[0];
  res.status(200).json(user ? user : users[0]);
};

export default Static;
