import express from 'express';
import { get, merge } from 'lodash';

import { getUserBySessionToken } from '../db/users';

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies['ANPGOA2A-AUTH'];
    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existsUser = await getUserBySessionToken(sessionToken);
    if (!existsUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existsUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
