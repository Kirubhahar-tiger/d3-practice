import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    SelectionState,
    IntegratedSelection,
    TreeDataState,
    CustomTreeData,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableTreeColumn,
} from '@devexpress/dx-react-grid-material-ui';

import {
    generateRows,
    defaultColumnValues,
} from '../demo-data/generator';

const getChildRows = (row, rootRows) => {
    const childRows = rootRows.filter(r => r.parentId === (row ? row.id : null));
    return childRows.length ? childRows : null;
};

const data = [
    {
        "id": 0,
        "parentId": null,
        "riskKPI": "67.5%",
        "name": "Brazil",
        "ACI": "88.5%"
    },
    {
        "id": 1,
        "parentId": 0,
        "riskKPI": "17.5%",
        "name": "ALASKA DENALI WINERY",
        "ACI": "88.5%"
    },
    {
        "id": 2,
        "parentId": 0,
        "riskKPI": "90.2%",
        "name": "ALASKAN BREWING, LLC",
        "ACI": "88.5%"
    },
    {
        "id": 3,
        "parentId": 1,
        "riskKPI": "13.8%",
        "name": "KALIMERA LLC",
        "ACI": "17.5%"
    },
    {
        "id": 4,
        "parentId": 0,
        "riskKPI": "80.5%",
        "name": "NORDIC COLD STORAGE, LLC",
        "ACI": "88.5%"
    },
    {
        "id": 5,
        "parentId": 2,
        "riskKPI": "92%",
        "name": "London",
        "ACI": "80.5%"
    },
    {
        "id": 6,
        "parentId": 2,
        "riskKPI": "88.5%",
        "name": "Los Angeles",
        "ACI": "88.5%"
    },
    {
        "id": 7,
        "parentId": 2,
        "riskKPI": "36.5%",
        "name": "Los Angeles",
        "ACI": "88.5%"
    },
    {
        "id": 8,
        "parentId": 0,
        "riskKPI": "27.5%",
        "name": "Peru",
        "ACI": "90.2%"
    },
    {
        "id": 9,
        "parentId": 1,
        "riskKPI": "7.5%",
        "name": "Los Angeles",
        "ACI": "80.5%"
    },
    {
        "id": 10,
        "parentId": 2,
        "riskKPI": "29%",
        "name": "New York",
        "ACI": "88.5%"
    },
    {
        "id": 11,
        "parentId": 2,
        "riskKPI": "36.5%",
        "name": "Peru",
        "ACI": "90.2%"
    },
    {
        "id": 12,
        "parentId": 5,
        "riskKPI": "67.5%",
        "name": "Colombia",
        "ACI": "80.5%"
    },
    {
        "id": 13,
        "parentId": 1,
        "riskKPI": "90.2%",
        "name": "Firm1",
        "ACI": "36.5%"
    },
    {
        "id": 14,
        "parentId": 6,
        "riskKPI": "88.5%",
        "name": "Tokyo",
        "ACI": "80.5%"
    },
    {
        "id": 15,
        "parentId": 3,
        "riskKPI": "90.2%",
        "name": "Austin",
        "ACI": "88.5%"
    },
    {
        "id": 16,
        "parentId": 6,
        "riskKPI": "67.5%",
        "name": "Austin",
        "ACI": "80.5%"
    },
    {
        "id": 17,
        "parentId": 5,
        "riskKPI": "36.5%",
        "name": "Chicago",
        "ACI": "88.5%"
    },
    {
        "id": 18,
        "parentId": 6,
        "riskKPI": "80.5%",
        "name": "Argentina",
        "ACI": "36.5%"
    },
    {
        "id": 19,
        "parentId": 0,
        "riskKPI": "67.5%",
        "name": "Los Angeles",
        "ACI": "80.5%"
    },
    {
        "id": 20,
        "parentId": null,
        "riskKPI": "67.5%",
        "name": "Argentina",
        "ACI": "88.5%"
    },
    {
        "id": 21,
        "parentId": 20,
        "riskKPI": "17.5%",
        "name": "ALASKA DENALI WINERY",
        "ACI": "88.5%"
    },
]

export default function TreeTable(props) {
    const [columns] = useState([
        { name: 'name', title: 'Country' },
        { name: 'riskKPI', title: ' Risk KPI (%)' },
        { name: 'ACI', title: ' Average Confidense Interval (%)' },
    ]);
    // const [data] = useState(generateRows({
    //     columnValues: {
    //         id: ({ index }) => index,
    //         parentId: ({ index, random }) => (index > 0 ? Math.trunc((random() * index) / 2) : null),
    //         ...defaultColumnValues,
    //     },
    //     length: 20,
    // }));
    const [tableColumnExtensions] = useState([
        { columnName: 'name', width: 300 },
    ]);
    const [defaultExpandedRowIds] = useState([0]);

    console.log('Tree Data : ',data );

    return (
        <Paper>
            <Grid
                rows={data}
                columns={columns}
            >
                <SelectionState />
                <TreeDataState
                    defaultExpandedRowIds={defaultExpandedRowIds}
                />
                <CustomTreeData
                    getChildRows={getChildRows}
                />
                <IntegratedSelection />
                <Table
                    columnExtensions={tableColumnExtensions}
                />
                <TableHeaderRow />
                <TableTreeColumn
                    for="name"
                    showSelectionControls
                    showSelectAll
                />
            </Grid>
        </Paper>
    );
};
