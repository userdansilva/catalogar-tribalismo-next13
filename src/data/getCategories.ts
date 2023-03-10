import execQuery from "../config/mysql";

import { Category } from "../types/Category";

export const getCategories = async () => {
  const clientId = process.env.CLIENT_ID as string;

  const query = "select id, name, favorite from categories where user_id = ? and archived = 'N'";
  const result = (await execQuery(query, [clientId])) as Category[];

  return JSON.parse(JSON.stringify(result));
};
