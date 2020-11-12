import React, {useState, forwardRef, useEffect} from 'react';
import MaterialTable from 'material-table';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';

const EventsTable = (props) => {

    const [columns, setColumns] = useState([
        { title: 'ID', field: '_id' },
        { title: 'Event Title', field: 'title' },
        { title: 'Description', field: 'desc', initialEditValue: 'initial edit value' },
        { title: 'Date', field: 'date', type: 'date' }
      ]);
      
      const [data, setData] = useState([props.events]);
      // const [data, setData] = useState([
      //   { id: 1, name: 'event one', desc: 'Description one', date: "11-02-2020" },
      //   { id: 22, name: 'event two', desc: 'Description two', date: "10-21-2020" },
      //   { id: 333, name: 'event three', desc: 'Description three', date: "11-20-2020" },
      // ]);

      const tableIcons = {
        // Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        // Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        // Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        // Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        // FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        // LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        // NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        // PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        // ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        // Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        // SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        // ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };

        useEffect(() => {
          console.log("events from EventsTable", props.events)
  }, []);

    

    return (

        <MaterialTable
        icons={tableIcons}
          title="Admin"
          columns={columns}
          data={data}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  
                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
      
                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  
                  resolve()
                }, 1000)
              }),
          }}
        />
      )
}

export default EventsTable




