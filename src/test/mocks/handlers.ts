import { rest } from 'msw'
import { PRODUCTS_URL } from '../../app/api.constants'

export const handlers = [
  rest.get(PRODUCTS_URL, async (request, response, ctx) => {
    const { default: products } = await import('./products.json')

    return response(ctx.status(200), ctx.json(products))
  }),
]
