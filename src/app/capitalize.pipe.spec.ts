/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CapitalizePipe } from './capitalize.pipe';

describe('Pipe: Capitalize', () => {
  it('create an instance', () => {
    let pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });
});
