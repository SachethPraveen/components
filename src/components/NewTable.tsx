import React, { memo, useMemo } from 'react'
import { useTable, useFilters } from 'react-table'

const NewTable = (props: { receivedData: any; receivedColumns: any }) => {
  const columns = useMemo(() => props.receivedColumns, [])
  const data = useMemo(() => props.receivedData, [])
  const tableInstance = useTable({ columns, data }, useFilters)
  const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow } =
    tableInstance

  return (
    <div>
      <div>{data.length}</div>
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
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
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
