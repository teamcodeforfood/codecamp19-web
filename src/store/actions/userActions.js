import * as types from './actionTypes';

const fetchUserFromServer = async () => {
  // try {
  //   let response = await request('/api/authenticate');
  //   const userData = await response.json();
  //
  //   window.iGlobal = window.iGlobal || {};
  //   window.iGlobal.Cache = window.iGlobal.Cache || {};
  //   window.iGlobal.Cache.user = userData;
  //
  //   if (!userData || !userData.active) {
  //     _redirectToLogin();
  //   }
  //
  //   return userData;
  // } catch (e) {
  //   _redirectToLogin();
  // }
  //
  return {};
};

export function recieveUser(json) {
  return { type: types.RECIEVE_USER, user: json.user };
}

export function fetchUser() {
  return async dispatch => {
    const user = await fetchUserFromServer();

    return dispatch(recieveUser({ user }));
  };
}
