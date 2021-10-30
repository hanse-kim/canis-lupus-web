import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {FeedRecord} from 'types/domain';

const BASE_URL = 'https://api.airtable.com/v0/appJ4BvTGzF8kGD3O/feed';

const feedList = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const list = await axios.get(BASE_URL, {
      params: {
        view: 'raw',
        filterByFormula: req.query.searchBy ?
          `({${req.query.searchBy}}='${req.query.keyword}')` :
          '',
        maxRecords: req.query.maxRecords,
      },
    });

    const records: FeedRecord[] = list.data.records;
    res.status(200).json({records: records});
  } catch (e: any) {
    console.log(e.message);
    res.status(500).json({error: true});
  }
};

export default feedList;
