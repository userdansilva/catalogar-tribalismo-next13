import execQuery from '../lib/mysql'

import { Product } from '../types/Product'

export const getProducts = async () => {
  const clientId = process.env.CLIENT_ID as string

  const query = "Select id, name from products where user_id = ? AND archived = 'N'"

  const result = (await execQuery(query, [clientId])) as Product[]

  return JSON.parse(JSON.stringify(result))
}
