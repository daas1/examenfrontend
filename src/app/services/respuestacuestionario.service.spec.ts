import { TestBed } from '@angular/core/testing';

import { RespuestacuestionarioService } from './respuestacuestionario.service';

describe('RespuestacuestionarioService', () => {
  let service: RespuestacuestionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespuestacuestionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
