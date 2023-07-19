

export const caseInsensitiveSort = (rowA, rowB) => {
    const a = (rowA.firstName ||rowA.lastName).toLowerCase();
    const b = (rowB.firstName||rowA.lastName).toLowerCase();
   
    if (a > b) {
        return 1;
    }

    if (b > a) {
        return -1;
    }

    return 0;
};

export const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,
        sortFunction: caseInsensitiveSort,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,
        sortFunction: caseInsensitiveSort,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true,
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
        sortable: true,
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
    },
    {
        name: 'City',
        selector: row => row.city ,
        sortable: true,
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true,
    },
    {
        name: 'Zip Code',
        selector: row => row.zipCode,
        sortable: true,
    },

];

export const paginationComponentOptions = {
    rowsPerPageText: 'show',
    rangeSeparatorText: 'of',
    selectAllRowsItem: false,
};


