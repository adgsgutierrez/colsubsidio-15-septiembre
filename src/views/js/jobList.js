import { URIS } from './constants.js';

export const jobList = () => {
    fetch(URIS.API.GET_ITEMS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        res.json().then(data => { 
          data.forEach(job => {
            const jobItem = document.createElement('div');
            jobItem.classList.add('job-item');
            let next = ''
            if (job.status === 0 || job.status === 1) {
              next = `
              <div class="job-item__footer">
                <button onclick="sendNextStatus(${job.id} , ${(job.status + 1)})">${ job.status === 0 ? 'Pasar a En Progreso' : 'Completar' }</button>
              </div>
              `
            }
            jobItem.innerHTML = `
              <div class="job-item__header">
                <h4>${job.name}</h4>
              </div>
              <div class="job-item__body">
                <p>${job.description}</p>
              </div>
              ${next}
            `;
            if(job.status === 0) {
              document.getElementById('section-backlog').appendChild(jobItem);
            } else if(job.status === 1) {
              document.getElementById('section-inprogress').appendChild(jobItem);
            } else {
              document.getElementById('section-complete').appendChild(jobItem);
            }
          });
        });
      })
      .catch(error => console.error('Error:', error))
}