import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '0c8a14fa-60ae-4d18-b6c1-bd09a46cd124',
};

export const sampleWithPartialData: IAuthority = {
  name: 'a9b4d1a2-3aa3-4090-84a0-fba3df0c0092',
};

export const sampleWithFullData: IAuthority = {
  name: 'c9feb5c6-ab0a-4813-bc0b-6276ee898471',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
