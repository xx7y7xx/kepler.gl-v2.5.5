import { combineReducers, createStore } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';

const reducers = combineReducers({
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
});

export default createStore(reducers, {});
