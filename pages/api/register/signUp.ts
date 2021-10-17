import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = `${process.env.API_ROOT_URL}`;
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

interface ResponseData {
  token: string;
}

const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: ResponseData = await axios
      .post(`${BASE_URL}auth/sign-up`, req.body, {
        headers: headers,
      })
      .then((res) => res.data);
    res.status(201).json({
      email: req.body.email,
      nickname: req.body.email,
      token: data.token,
    });
  } catch (e: any) {
    console.log(e.message);
    res.status(500).json({error: true});
  }
};

export default signUp;
