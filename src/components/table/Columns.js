const dailyActDate = date => {
const dateFormatChange = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
  return dateFormatChange;
};
export const Columns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
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
    accessor: "departments",
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
    accessor: "states",
  },
  {
    Header: "Zip Code",
    accessor: "zipCode",
  },
];
