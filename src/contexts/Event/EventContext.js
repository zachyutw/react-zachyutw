import React, { createContext, useCallback, useReducer } from 'react';
import localStorageSafe from 'zach-local-storage-safe';
import _ from 'lodash';
import icsToJson from 'ics-to-json';
import { cloudFetch } from '../../API';
const Context = createContext({});
const FETCH_DATA_URL = '/webtextfile';

const GET_ITEMS = 'getItems';
const getItems = dipatch => async ({ url }) => {
  const data = await cloudFetch
    .post(FETCH_DATA_URL, { url })
    .then(res => {
      const data = res.data.data.replace(/\\/g, ``);
      return icsToJson(data).sort(
        (a = {}, b = {}) => a.startDate - b.startDate
      );
    })
    .catch(err => {
      console.log(err);
      return [];
    });
  dipatch({ actionType: GET_ITEMS, name: 'items', payload: { items: data } });
};

const reducer = (state, action) => {
  const { name, payload, actionType } = action;
  switch (actionType) {
    case GET_ITEMS:
      localStorageSafe.setItem(
        'eventData',
        { ...state.data, [name]: payload[name] },
        30000
      );
      return { ...state, data: { ...state.data, [name]: payload[name] } };
    default:
      return state;
  }
};

const initState = {
  data: localStorageSafe.getItem('eventData', 'object'),
  condition: { error: { message: null } }
};
export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  const getItemsAction = useCallback(getItems(dispatch), []);

  const _onLoad = useCallback((data = {}) => {
    const { pathname, actionType } = data;
    switch (pathname) {
      default:
        break;
    }
    switch (actionType) {
      case 'getItems':
        if (_.isEmpty(localStorageSafe.getItem('eventData', 'object'))) {
          getItemsAction({ url: process.env.REACT_APP_CALENDAR_URL });
        }
        break;
      default:
        break;
    }
  }, []);
  const _onChange = useCallback((e, data) => {
    switch (data.actionType) {
      default:
        break;
    }
  }, []);

  return (
    <Context.Provider value={{ state, onChange: _onChange, onLoad: _onLoad }}>
      {props.children}
    </Context.Provider>
  );
};

export const withContext = Componet => props => {
  return (
    <Provider>
      <Componet {...props} />
    </Provider>
  );
};

export default Context;
