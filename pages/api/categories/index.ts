import {NextApiRequest, NextApiResponse} from 'next';
import {categories} from 'static';

const Static = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(categories);
};

export default Static;
