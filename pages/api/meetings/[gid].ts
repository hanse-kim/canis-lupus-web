import {NextApiRequest, NextApiResponse} from 'next';
import {groups} from 'static';

const Static = async (req: NextApiRequest, res: NextApiResponse) => {
  const {gid} = req.query;
  const group = groups.filter((item) => item._id === gid)[0];
  res.status(200).json(group ? group : groups[0]);
};

export default Static;
