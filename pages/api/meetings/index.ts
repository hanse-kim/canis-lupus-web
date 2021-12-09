import {NextApiRequest, NextApiResponse} from 'next';
import {groups} from 'static';

const Static = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(groups.slice(0, 6));
};

export default Static;
