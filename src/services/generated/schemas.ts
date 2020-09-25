export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  /** A time string with format: HH:mm:ss.SSS */
  Time: any
  /** The `Long` scalar type represents 52-bit integers */
  Long: any
}
export type Order = {
  id: Scalars['ID']
  _id: Scalars['ID']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  detail?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['Int']>
  delivery_time?: Maybe<Scalars['Date']>
  name?: Maybe<Scalars['String']>
}

export type OrderConnection = {
  values?: Maybe<Array<Maybe<Order>>>
  aggregate?: Maybe<OrderAggregator>
}

export type Query = {
  ordersConnection?: Maybe<OrderConnection>
}

export type OrderAggregatorSum = {
  amount?: Maybe<Scalars['Float']>
}

export type OrderAggregatorAvg = {
  amount?: Maybe<Scalars['Float']>
}

export type OrderAggregatorMin = {
  amount?: Maybe<Scalars['Float']>
}

export type OrderAggregatorMax = {
  amount?: Maybe<Scalars['Float']>
}

export type OrderAggregator = {
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<OrderAggregatorSum>
  avg?: Maybe<OrderAggregatorAvg>
  min?: Maybe<OrderAggregatorMin>
  max?: Maybe<OrderAggregatorMax>
}
