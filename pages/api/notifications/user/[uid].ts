import {NextApiRequest, NextApiResponse} from 'next';
import {groups} from 'static';

const Static = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      _id: '',
      user: '유저1',
      meeting: 'group1',
      imageUrl: groups[0].imageUrls[0],
      contents: '게시물에 댓글이 달렸습니다.',
      isShown: '',
      createdAt: '2021-11-17T13:24:00',
      updatedAt: '2021-11-17T13:24:00',
    },
    {
      _id: '',
      user: '유저1',
      meeting: 'group2',
      imageUrl: groups[1].imageUrls[0],
      contents: '모임 가입 신청이 수락되었습니다.',
      isShown: '',
      createdAt: '2021-11-17T13:24:00',
      updatedAt: '2021-11-17T13:24:00',
    },
    {
      _id: '',
      user: '유저1',
      meeting: 'group3',
      imageUrl: groups[2].imageUrls[0],
      contents: '새로운 퀘스트가 등록되었습니다.',
      isShown: '',
      createdAt: '2021-11-17T13:24:00',
      updatedAt: '2021-11-17T13:24:00',
    },
  ]);
};

export default Static;
