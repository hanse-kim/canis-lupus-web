/* eslint-disable max-len */
import {NextApiRequest, NextApiResponse} from 'next';

const Static = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdlOTVjMDY2MTlkZDkzOGQ1OTdmMzYiLCJuYW1lIjoi7JWg7Ji57JWg7Ji5IiwiaWF0IjoxNjM3MTMwNzEzfQ.Sgrnk4_MdZewA52s4IoV3uUdCG8ggF2l3HZJZvBWeJY',
  });
};

export default Static;
