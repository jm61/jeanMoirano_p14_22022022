const dailyActDate = date => {
const dateFormatChange = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
  return dateFormatChange
};
export const Columns = [
  {
    Header: "First Name",
    accessor: "firstname",
  },
  {
    Header: "Last Name",
    accessor: "lastname",
  },
  {
    Header: "Start Date",
    accessor: "startDate",
    Cell: ({ value }) => {return dailyActDate(value)},
    },
  {
    Header: "Birth Date",
    accessor: "birthDate",
    Cell: ({ value }) => {return dailyActDate(value)},
    },
    {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "Zip Code",
    accessor: "zipCode",
  },
]
