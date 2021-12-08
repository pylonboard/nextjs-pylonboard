import { combineReducers } from '@reduxjs/toolkit';
import { reducer as projectsBoardReducer } from 'src/slices/projects_board';


export const rootReducer = combineReducers({
  projectsBoard: projectsBoardReducer,
});
