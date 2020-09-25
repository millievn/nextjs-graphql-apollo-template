import * as Types from './operations'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export const OrderFragmentDoc = gql`
  fragment order on Order {
    id
    name
    createdAt
    updatedAt
    detail
    amount
    delivery_time
    user {
      username
    }
  }
`
export const OrdersConnectionDocument = gql`
  query OrdersConnection($limit: Int, $start: Int, $where: JSON) {
    ordersConnection(sort: "createdAt:desc", limit: $limit, start: $start, where: $where) {
      values {
        ...order
      }
      aggregate {
        count
      }
    }
  }
  ${OrderFragmentDoc}
`

export function useOrdersConnectionQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.OrdersConnectionQuery, Types.OrdersConnectionQueryVariables>
) {
  return Apollo.useQuery<Types.OrdersConnectionQuery, Types.OrdersConnectionQueryVariables>(
    OrdersConnectionDocument,
    baseOptions
  )
}
export function useOrdersConnectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.OrdersConnectionQuery, Types.OrdersConnectionQueryVariables>
) {
  return Apollo.useLazyQuery<Types.OrdersConnectionQuery, Types.OrdersConnectionQueryVariables>(
    OrdersConnectionDocument,
    baseOptions
  )
}
export type OrdersConnectionQueryHookResult = ReturnType<typeof useOrdersConnectionQuery>
export type OrdersConnectionLazyQueryHookResult = ReturnType<typeof useOrdersConnectionLazyQuery>
export type OrdersConnectionQueryResult = Apollo.QueryResult<
  Types.OrdersConnectionQuery,
  Types.OrdersConnectionQueryVariables
>
