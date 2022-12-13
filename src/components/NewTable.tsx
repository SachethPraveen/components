import React from 'react'
import Filter from './Filter'
import Pagination from './Pagination'

const NewTable = (props: {
  data: Object[]
  filterPress: Function
  generateKey: () => string
  noFilter?: boolean
}) => {
  return (
    <div>
      <Pagination length={props.data.length} />
      <table className='table'>
        <thead className='table-light'>
          <tr>
            {Object.keys(props.data[0]).map((key) => {
              return <th key={props.generateKey()}>{key}</th>
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(props.data[0]).map((key) => {
              return (
                <td key={props.generateKey()}>
                  <Filter head={key} filterPress={props.filterPress} />
                </td>
              )
            })}
            <td></td>
          </tr>
          {!props.noFilter &&
            props.data.map((product) => {
              return (
                <tr key={props.generateKey()}>
                  {Object.values(product).map((value) => {
                    return <td key={props.generateKey()}>{value}</td>
                  })}
                  <td>
                    <span className='material-symbols-outlined'>
                      visibility
                    </span>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      {props.noFilter && (
        <div className='w-100 d-flex justify-content-center fs-2'>
          Sorry, No Results Found!
        </div>
      )}
    </div>
  )
}

export default NewTable
