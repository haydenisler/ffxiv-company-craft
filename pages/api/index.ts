import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { Sequelize } from 'sequelize';

import {
    company_craft_draft,
    company_craft_draft_category,
    initModels,
} from '../../models/init-models';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: path.resolve('./data/ffxiv_company_craft.db'),
    });

    console.log(sequelize);

    initModels(sequelize);

    const result = await company_craft_draft.findAll({
        where: { id: 0 },
        include: company_craft_draft_category,
    });
    console.log(result);

    res.status(200).json(result);
};
