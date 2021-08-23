import Database from 'better-sqlite3';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const db = new Database(path.resolve('./data/ffxiv_company_craft.db'), {
        verbose: console.log,
    });

    console.log(db);

    res.status(200).json({ name: 'John Doe' });
};
