import React, {useState, forwardRef, useEffect} from 'react';
import MaterialTable from 'material-table';
//icons
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SortIcon from '@material-ui/icons/Sort';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
// import ImportExportIcon from '@material-ui/icons/ImportExport';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Delete } from '@material-ui/icons';


const EventsTable = ({eventsData, setEvents, handleEvents}) => {

  console.log("data from eventsTable", eventsData)



  // const events = eventsData;

    const [columns, setColumns] = useState([
        { title: 'ID', field: '_id', editable: 'never' },
        { title: 'Event Title', field: 'title' },
        { title: 'Description', field: 'desc' },
        { title: 'Date', field: 'date', type: 'date' }
      ]);
      


      const tableIcons = {
        Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <SaveIcon {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <CancelIcon {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        // Export: forwardRef((props, ref) => <ImportExportIcon {...props} ref={ref} />),
        // Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <SkipNextIcon {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <SkipPreviousIcon {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <SortIcon {...props} ref={ref} />),
        // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        // ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };

      const handleAddEvent = (newData) => {
        fetch('http://localhost:5005/api/events', {
          method: "POST",
          body: JSON.stringify({...newData}),
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(res => res.json());
      };

      const handleDeleteEvent = (id) => {
        fetch(`http://localhost:5005/api/events/${id}`, {
          method: "DELETE"
        }).then(res => res.json());
      };

    
    return (
      <>
        <MaterialTable
            icons={tableIcons}
            title="Admin"
            columns={columns}
            options={{
              sorting: true
            }}
            data={eventsData}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                    handleAddEvent(newData);
                    setTimeout(() => {
                      setEvents([...eventsData, newData]);
                      resolve();
                    }, 1000)

                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...eventsData];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setEvents([...dataUpdate]);
        
                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  
                  setTimeout(() => {
                    handleDeleteEvent(oldData._id);
                    const dataDelete = [...eventsData];
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

export default EventsTable;
// export default withAuthenticator(EventsTable)




