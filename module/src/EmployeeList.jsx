import React from 'react'
import EmployeeFilter from './EmployeeFilter.jsx'
import EmployeeAdd from './EmployeeAdd.jsx'

function EmployeeRow(props) {
  return (
    <tr>
      <td>{props.employee.name}</td>
    </tr>
  )
}

function EmployeeTable(props) {
  const rows = props.employees.map(emp =>
    <EmployeeRow key={emp.id} employee={emp} />
  )

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default class EmployeeList extends React.Component {
  constructor() {
    super()
    this.state = {
      employees: [
        { id: 1, name: 'Zak Ruvalcaba' },
        { id: 2, name: 'Sally Smith' },
        { id: 3, name: 'Holly Unlikely' },
        { id: 4, name: 'Amol Shookup' }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Employee List</h1>

        <EmployeeFilter />
        <EmployeeTable employees={this.state.employees} />
        <EmployeeAdd />
      </div>
    )
  }
}