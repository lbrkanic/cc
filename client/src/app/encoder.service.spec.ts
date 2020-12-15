import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { EncoderService } from './encoder.service';

describe('EncoderService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    let encoderService: EncoderService = TestBed.inject(EncoderService);
    expect(encoderService).toBeTruthy();
  });

  it('should encode input message', () => {
    let encoderService: EncoderService = TestBed.inject(EncoderService);
    encoderService.encode('RRFA').subscribe((res) => {
      expect(res).toEqual('R2F1A1');
    });

    const req = httpTestingController.expectOne('/ws/encoder');
    expect(req.request.method).toBe('POST');
    req.flush({ result: 'R2F1A1' });
  });
});
