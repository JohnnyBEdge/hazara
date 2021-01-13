import React, {useState, forwardRef, useContext} from 'react';
import {EventsContext} from '../../Context/EventsContext'
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
import SortIcon from '@material-ui/icons/ArrowUpward';
// import SortIcon from '@material-ui/icons/Sort';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
// import ImportExportIcon from '@material-ui/icons/ImportExport';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Delete } from '@material-ui/icons';
import {handleAddEvent, handleDeleteEvent, handleEditEvent} from '../../api/EventsAPI'


const EventsTable = () => {

  const eventsData = useContext(EventsContext);

    const [columns] = useState([
        { title: 'ID', field: '_id', editable: 'never' },
        { title: 'Event Title', field: 'title', validate: rowData => !rowData.title ? { isValid: false, helperText: 'Name cannot be empty' } : true },
        { title: 'Description', field: 'desc', validate: rowData => !rowData.desc ? { isValid: false, helperText: 'Description cannot be empty' } : true },
        { title: 'Date', field: 'date', type: 'date',validate: rowData => !rowData.date ? { isValid: false, helperText: 'Date cannot be empty' } : true }
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

    
    return (
      <>
        <MaterialTable
            icons={tableIcons}
            title="Admin"
            columns={columns}
            options={{
              sorting: true,
              thirdSortClick: false
            }}
            data={eventsData.events}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                    handleAddEvent(newData);
                    setTimeout(() => {
                      eventsData.setEvents([...eventsData.events, newData]);
                      resolve();
                    }, 1000)

                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  handleEditEvent(oldData._id, newData)
                  setTimeout(() => {
                    const dataUpdate = [...eventsData.events];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    eventsData.setEvents([...dataUpdate]);
        
                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  
                  setTimeout(() => {
                    handleDeleteEvent(oldData._id);
                    const dataDelete = [...eventsData.events];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    eventsData.setEvents([...dataDelete]);
                    
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




