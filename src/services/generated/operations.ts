import * as Types from './schemas'

export type OrderFragment = Pick<
  Types.Order,
  'id' | 'name' | 'createdAt' | 'updatedAt' | 'detail' | 'amount' | 'delivery_time'
>

export type OrdersConnectionQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>
  start?: Types.Maybe<Types.Scalars['Int']>
  where?: Types.Maybe<Types.Scalars['JSON']>
}>

export type OrdersConnectionQuery = {
  ordersConnection?: Types.Maybe<{
    values?: Types.Maybe<Array<Types.Maybe<OrderFragment>>>
    aggregate?: Types.Maybe<Pick<Types.OrderAggregator, 'count'>>
  }>
}
