import React, { memo, useMemo } from 'react'
import { useTable, useFilters, usePagination } from 'react-table'
import Pagination from './Pagination'

const NewTable = (props: { receivedData: any; receivedColumns: any }) => {
  const columns = useMemo(() => props.receivedColumns, [])
  const data = props.receivedData
  const tableInstance = useTable({ columns, data }, useFilters, usePagination)

  const {
    getTableProps,
    getTableBodyProps,
    // @ts-expect-error
    page,
    // @ts-expect-error
    nextPage,
    // @ts-expect-error
    previousPage,
    // @ts-expect-error
    pageOptions,
    state,
    // @ts-expect-error
    canPreviousPage,
    // @ts-expect-error
    canNextPage,
    headerGroups,
    prepareRow
  } = tableInstance

  // @ts-expect-error
  const { pageIndex } = state

  return (
    <div>
      <Pagination
        length={data.length}
        pages={pageOptions}
        previous={previousPage}
        next={nextPage}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        index={pageIndex}
      />
      <table className='table mt-3' {...getTableProps()}>
        <thead className='table-light'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  {/* @ts-expect-error canFilter is not in type def */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* @ts-expect-error */}
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {/* @ts-expect-error */}
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(NewTable)
