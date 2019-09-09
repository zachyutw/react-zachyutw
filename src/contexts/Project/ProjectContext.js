import React, { createContext, useCallback, useReducer } from 'react';
import _ from 'lodash';
import localStorageSafe from 'zach-local-storage-safe';
import { cloudFetch } from '../../API';
import { metaImage, metaDescription } from '../../utils/metaData';

const WEBPAGE_URL = '/webpage';
const FETCH_DATA_URL = '/webtextfile';

const getGithubReadme = url => {
  if (new RegExp('github.com', 'g').test(url)) {
    return (
      url.replace('github.com', 'raw.githubusercontent.com') +
      '/master/README.md'
    );
  } else {
    return null;
  }
};

const GET_ITEM = 'getItem';
const getItem = disptach => async ({ name, url }) => {
  const meta = await cloudFetch
    .post(WEBPAGE_URL, { url })
    .then(res => {
      const meta = res.data.meta || {};
      const payload = {
        url,
        imageUrl: metaImage(meta),
        description: metaDescription(meta)
      };
      return payload;
    })
    .catch(err => {
      console.log(err);
      return {};
    });
  let fetchedData = {};
  const readmeUrl = getGithubReadme(url);
  if (readmeUrl) {
    fetchedData = await cloudFetch
      .post(FETCH_DATA_URL, { url: readmeUrl })
      .then(res => {
        const readme = res.data.data || '';
        const payload = { readme };
        return payload;
      })
      .catch(err => {
        console.log(err);
        return {};
      });
  }
  disptach({
    actionType: GET_ITEM,
    name,
    payload: { ...meta, ...fetchedData }
  });
};
const projectField = {
  lasfu: {
    url: 'https://lasfu.com'
  },
  'react-zachyutw': {
    url: 'https://zachyutw.github.io/react-zachyutw'
  },
  roro: {
    url: 'https://dev.roro.one'
  },
  'react-use-is-scrolled-into-view': {
    url: 'https://github.com/zachyutw/react-use-is-scrolled-into-view'
  },
  'with-item-events': {
    url: 'https://github.com/zachyutw/with-item-events'
  },
  'zach-local-storage-safe': {
    url: 'https://github.com/zachyutw/zach-local-storage-safe'
  }
};

const reducer = (state, action) => {
  const { name, payload, actionType } = action;
  switch (actionType) {
    case GET_ITEM:
      localStorageSafe.setItem(
        'projectData',
        { ...state.data, [name]: payload },
        30000
      );
      return { ...state, data: { ...state.data, [name]: payload } };
    default:
      return state;
  }
};
const Context = createContext({});
const initItemsState = {
  data: localStorageSafe.getItem('projectData', 'object'),
  condition: { error: { message: null } }
};
export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initItemsState);
  const getItemAction = useCallback(getItem(dispatch), []);
  const _onLoad = useCallback((data = {}) => {
    const { pathname, actionType } = data;
    switch (pathname) {
      default:
        break;
    }
    switch (actionType) {
      case 'getItemField':
        if (_.isEmpty(localStorageSafe.getItem('projectData', 'object'))) {
          Object.entries(projectField).map(([name, { url }]) => {
            getItemAction({ name, url });
          });
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
