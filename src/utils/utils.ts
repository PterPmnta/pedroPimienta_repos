import { MockSimulated, MockPhaseThree } from '../interfaces/interfaces';

export const mockSilumated: MockSimulated[] = [
  {
    id: 1,
    state: 604,
  },
  {
    id: 2,
    state: 605,
  },
  {
    id: 3,
    state: 606,
  },
];

export const mockPhaseThree: MockPhaseThree[] = [
  {
    id: '1',
    name: 'cd-common-utils',
    tribe: 'Centro Digital',
    organization: 'Banco Pichincha',
    coverage: '35%',
    codeSmells: 0,
    bugs: 0,
    vulnerabilities: 0,
    hotspots: 0,
    verificationState: 'Verificado',
    state: 'Habilitado',
  },
  {
    id: '2',
    name: 'cd-common-text',
    tribe: 'Centro Digital',
    organization: 'Banco Pichincha',
    coverage: '75%',
    codeSmells: 1,
    bugs: 0,
    vulnerabilities: 2,
    hotspots: 0,
    verificationState: 'En espera',
    state: 'Archivado',
  },
];

export const repositoryData = {
  result: {
    id_repository: 1,
    name: 'Repositorio Luna',
    state: 'E',
    status: 'A',
    created_at: '2022-07-14T07:31:25.134Z',
    id_tribe: 1,
    id_metric: {
      id_metric: 1,
      coverage: 80,
      bugs: '10',
      vulnerabilities: '2',
      hotspot: '4',
      code_smells: '8',
    },
  },
  message: 'Repositorio consultado con exito.',
};

export const reposByTribeId = [
  {
    id_repository: 1,
    name: 'Repositorio Luna',
    state: 'Enable',
  },
  {
    id_repository: 10,
    name: 'Repositorio Luna',
    state: 'Disable',
  },
  {
    id_repository: 15,
    name: 'Repositorio Luna',
    state: 'Archived',
  },
  {
    id_repository: 21,
    name: 'Repositorio Luna',
    state: 'Enable',
  },
];
