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
// import ImportExportIcon from '@material-ui/icons/ImportExport';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


const EventsTable = ({eventsData, setEvents}) => {

  console.log("data from eventsTable", eventsData)
  
  const events = eventsData;

    const [columns, setColumns] = useState([
        { title: 'ID', field: '_id' },
        { title: 'Event Title', field: 'title' },
        { title: 'Description', field: 'desc', initialEditValue: 'initial edit value' },
        { title: 'Date', field: 'date', type: 'date' }
      ]);
      


      const tableIcons = {
        Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
        // Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        // Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
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

export default EventsTable;
// export default withAuthenticator(EventsTable)




