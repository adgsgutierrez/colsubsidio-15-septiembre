import { URIS } from './constants.js';

export const jobUpdate = (id, status) => {
    fetch(URIS.API.UPDATE_ITEM, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, status })
      }).then(res => {
        res.json().then(data => { 
          window.location.reload();
        });
      })
      .catch(error => console.error('Error:', error));
};