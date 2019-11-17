import { TestBed } from '@angular/core/testing';

import { UserTableDetailsService } from './user-table-details.service';

describe('UserTableDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTableDetailsService = TestBed.get(UserTableDetailsService);
    expect(service).toBeTruthy();
  });
});
