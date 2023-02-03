// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import logger from '@/services/logger';

export default function handler(req, res) {
    // logger.info(`Request headers: ${JSON.stringify(req.headers)}`);

    try {
        throw new Error('Oops! there was an error processing your request');
    } catch (e) {
        logger.error(`${e.message} \n ${e.stack}`);
    }
    res.status(200).json({ name: 'John Doe' });
}
