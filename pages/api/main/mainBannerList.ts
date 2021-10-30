import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {BannerRecord} from 'types/domain';

const BASE_URL = 'https://api.airtable.com/v0/appJ4BvTGzF8kGD3O/main_banner';

const mainBannerList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const list = await axios.get(BASE_URL, {
      params: {view: 'raw', fields: ['url', 'img_url']},
    });

    const records: BannerRecord[] = list.data.records;
    res.status(200).json({records: records});
  } catch (e: any) {
    console.log(e.message);
    res.status(500).json({error: true});
  }
};

export default mainBannerList;
