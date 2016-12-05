/* tslint:disable:no-unused-variable */
import { TestBed, inject } from "@angular/core/testing";
import { AutocompleteService } from "./auto-complete.service";

describe('AutoCompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutocompleteService]
    });
  });

  it('should ...', inject([AutocompleteService], (service: AutocompleteService) => {
    expect(service).toBeTruthy();
  }));
});
