import { Injectable } from '@nestjs/common';
import { mockSilumated, mockPhaseThree } from '../utils/utils';

@Injectable()
export class PhaseOneService {
  getMockSimulated() {
    return {
      repositories: mockSilumated,
    };
  }

  getMockPhaseThree() {
    return {
      repositories: mockPhaseThree,
    };
  }
}
