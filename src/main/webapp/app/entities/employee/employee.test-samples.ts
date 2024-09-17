import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 3838,
};

export const sampleWithPartialData: IEmployee = {
  id: 9972,
  name: 'bird idolized',
  address: 'coaxingly yahoo impassioned',
};

export const sampleWithFullData: IEmployee = {
  id: 23743,
  name: 'hence loyally brr',
  salary: 32522,
  address: 'yippee kindheartedly hungrily',
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
