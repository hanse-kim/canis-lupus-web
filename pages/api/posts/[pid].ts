import {NextApiRequest, NextApiResponse} from 'next';
import {posts} from 'static';

const Static = async (req: NextApiRequest, res: NextApiResponse) => {
  const {pid} = req.query;
  const post = posts.filter((item) => item._id === pid)[0];
  res.status(200).json(post ? post : posts[0]);
};

export default Static;
