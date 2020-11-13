import React, {useState, forwardRef, useEffect} from 'react';
import MaterialTable from 'material-table';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';

const EventsTable = ({events, setEvents}) => {

    const [columns, setColumns] = useState([
        { title: 'ID', field: '_id' },
        { title: 'Event Title', field: 'title' },
        { title: 'Description', field: 'desc', initialEditValue: 'initial edit value' },
        { title: 'Date', field: 'date', type: 'date' }
      ]);
      

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
      console.log("events from EventsTable2", events)
        
      
    
    return (
      <>
        <MaterialTable
            icons={tableIcons}
              title="Admin"
              columns={columns}
              data={events}
              editable={{
                onRowAdd: newData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      setEvents([...events, newData]);
                      
                      resolve();
                    }, 1000)
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...events];
                      const index = oldData.tableData.id;
                      dataUpdate[index] = newData;
                      setEvents([...dataUpdate]);
          
                      resolve();
                    }, 1000)
                  }),
                onRowDelete: oldData =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataDelete = [...events];
                      const index = oldData.tableData.id;
                      dataDelete.splice(index, 1);
                      setEvents([...dataDelete]);
                      
                      resolve()
                    }, 1000)
                  }),
              }}
            />
          </>
      )
}

export default EventsTable




