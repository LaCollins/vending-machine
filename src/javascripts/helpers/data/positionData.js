import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPositionsByMachineID = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/positions.json?orderBy="machineId"&equalTo="${machineId}"`)
    .then((response) => {
      const demPositions = response.data;
      const positions = [];
      Object.keys(demPositions).forEach((fbId) => {
        demPositions[fbId].id = fbId;
        positions.push(demPositions[fbId]);
      });
      // order positions a1, a2, a3....
      const sortedPositions = positions.sort((a, b) => a.position.localeCompare(b.position, 'en', { numeric: true }));
      resolve(sortedPositions);
    })
    .catch((error) => reject(error));
});

export default { getAllPositionsByMachineID };
