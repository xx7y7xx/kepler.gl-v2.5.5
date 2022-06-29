import { configureStore } from '@reduxjs/toolkit';
import keplerGlReducer from 'kepler.gl/reducers';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    keplerGl: keplerGlReducer.initialState({
      uiState: {
        readOnly: true,
        mapControls: {
          visibleLayers: {
            show: false
          },
          mapLegend: {
            show: false,
            active: false
          },
          toggle3d: {
            show: false
          },
          splitMap: {
            show: false
          }
        }
      }
    }),
  },
});
