import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../prisma/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await prisma.company_craft_draft.findMany();
    console.log(result);

    res.status(200).json({ name: 'John Doe' });
};
