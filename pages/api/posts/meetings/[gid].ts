import {NextApiRequest, NextApiResponse} from 'next';
import {posts} from 'static';

const Static = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(posts);
};

export default Static;
