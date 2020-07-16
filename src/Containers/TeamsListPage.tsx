import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import MaterialTable, { Column } from 'material-table';
import { Avatar } from '@material-ui/core';

import * as ApiObjects from '../Api/ApiObjects';
import { fetchTeamsList, fetchPlayersList, saveCurrentTeam } from '../State/Actions/App';

const StyledAppDiv: any = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
	align-content: center;
  width: 100%;
  height: 90%;
  overflow: auto;
`;

const TeamsListPage: React.FunctionComponent = () => {
  const history = useHistory();
  const dispatch: Dispatch = useDispatch();

  const localTeamsList: ApiObjects.ITeamDetails[] = useSelector((state: any) => state.app.teamsList.data);

  React.useEffect(() => {
    navigateToTeamsList();
    dispatch(fetchTeamsList());
  }, []);

  const navigateToOneTeamDetails = (teamID: number) => {
    history.push(`/teams/${teamID}`);
  }

  const navigateToTeamsList = () => {
    history.push('/teams');
  }

  const columns: Array<Column<ApiObjects.ITeamDetails>> = [
    { title: 'Symbol', field: 'badgeURL', sorting: false, render: rowData => (<Avatar alt={rowData.fullName} src={rowData.badgeURL} />) },
    { title: 'Team name', field: 'name' },
    { title: 'Location', field: 'address' },
    { title: 'Founded', field: 'founded' },
  ];

  const handleRowClicked = (clickedRow: ApiObjects.ITeamDetails | undefined) => {
    if (typeof clickedRow !== 'undefined') {
      dispatch(fetchPlayersList(clickedRow.id));
      dispatch(saveCurrentTeam(clickedRow));
      navigateToOneTeamDetails(clickedRow.id);
    }
  }

  return (
    <StyledAppDiv>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <MaterialTable
        columns={columns}
        data={localTeamsList}
        style={{ maxHeight: '0px', width: '80%' }}
        localization={{
          header: { actions: '' }
        }}
        options={{
          search: false,
          showTextRowsSelected: false,
          showTitle: false,
          showFirstLastPageButtons: false,
          headerStyle: { fontWeight: 'bold' },
          actionsColumnIndex: -1,
          emptyRowsWhenPaging: false,
          pageSizeOptions: [1, 2, 3, 4, 5, 6]
        }}
        onRowClick={(e, rowData) => handleRowClicked(rowData)}
      />
    </StyledAppDiv>
  );
}

export default TeamsListPage;
