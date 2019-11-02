import machineData from './machineData';
import positionData from './positionData';
import snackPositionData from './snackPositionData';
import snackData from './snackData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  // 1. getMachines - returns first machine (hard coding) - done
  // 2. use MachineId to get all positions for that machine - done
  // 3. use machineId to get all snack positions - Done
  // 4. use uid of snackPositions/positions to get snacks available for that machine - done
  // 5. SMASH 'EM - return an array of positions (in order A1, A2, A3...) so positions should have position.snack if a snack exists at that position

  machineData.getMachine()
    .then((singleMachine) => positionData.getAllPositionsByMachineID(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnacksByUid(positions[0].uid).then((snacks) => {
            console.log('snack positions', snackPositions);
            resolve(snacks);
          });
        });
    })
    .catch((error) => reject(error));
});


export default { getCompleteMachine };
