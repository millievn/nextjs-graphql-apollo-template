import React from 'react'
import { useOrdersConnectionQuery } from '../../services'

import styles from './index.module.scss'

function Order(): React.ReactElement {
  const { data, loading, refetch } = useOrdersConnectionQuery()

  const onPageChange = (p: number, s?: number) => {
    refetch({
      limit: s,
      start: p * (s || 1),
    })
  }

  // eslint-disable-next-line no-console
  console.log(data, loading)

  return (
    <div className={styles.order}>
      <span onClick={() => onPageChange(2)} aria-hidden='true'>
        Hello World
      </span>
    </div>
  )
}

export default Order
