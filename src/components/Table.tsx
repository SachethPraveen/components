import React from 'react'
import Filter from './Filter'

const Table = (props: { data?: Object[] }) => {
  return (
    <div>
      {props.data && (
        <table>
          <thead className='table-light'>
            <tr>
              {Object.keys(props.data[0]).map((head) => {
                return <th scope='col'>{head}</th>
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.data[0]).map(() => {
              return (
                <td>
                  <Filter />
                </td>
              )
            })}
          </tbody>
          <tbody>
            {props.data.map((row) => {
              return (
                <tr>
                  {Object.values(row).map((detail) => {
                    return <td>{detail}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
      {!props.data && (
        <table className='table'>
          <thead className='table-light'>
            <tr>
              <th scope='col'>S. No</th>
              <th scope='col'>Transactions ID</th>
              <th scope='col'>Mobile No.</th>
              <th scope='col'>Bank</th>
              <th scope='col'>BIN</th>
              <th scope='col'>Status</th>
              <th scope='col'>Created Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <td>
              <Filter />
            </td>
            <td>
              <Filter />
            </td>
            <td>
              <Filter />
            </td>
            <td>
              <Filter />
            </td>
            <td>
              <Filter />
            </td>
            <td>
              <Filter />
            </td>
            <td>
              <Filter />
            </td>
          </tbody>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>123456789012345678901234567890</td>
              <td>1234567890</td>
              <td>YesBank</td>
              <td>123456</td>
              <td className='text-success'>SUCCESS</td>
              <td>{new Date().toUTCString()}</td>
              <td>
                <span className='material-symbols-outlined'>visibility</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>123456789012345678901234567890</td>
              <td>1234567890</td>
              <td>YesBank</td>
              <td>123456</td>
              <td className='text-danger'>FAIL</td>
              <td>{new Date().toUTCString()}</td>
              <td>
                <span className='material-symbols-outlined'>visibility</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>123456789012345678901234567890</td>
              <td>1234567890</td>
              <td>YesBank</td>
              <td>123456</td>
              <td className='text-success'>SUCCESS</td>
              <td>{new Date().toUTCString()}</td>
              <td>
                <span className='material-symbols-outlined'>visibility</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>4</th>
              <td>123456789012345678901234567890</td>
              <td>1234567890</td>
              <td>YesBank</td>
              <td>123456</td>
              <td className='text-danger'>FAIL</td>
              <td>{new Date().toUTCString()}</td>
              <td>
                <span className='material-symbols-outlined'>visibility</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>5</th>
              <td>123456789012345678901234567890</td>
              <td>1234567890</td>
              <td>YesBank</td>
              <td>123456</td>
              <td className='text-success'>SUCCESS</td>
              <td>{new Date().toUTCString()}</td>
              <td>
                <span className='material-symbols-outlined'>visibility</span>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Table
