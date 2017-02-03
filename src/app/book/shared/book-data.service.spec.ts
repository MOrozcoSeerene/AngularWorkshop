import {TestBed, inject} from "@angular/core/testing";
import {BookDataService} from "./book-data.service";
import {HttpModule, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('BookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BookDataService, {
        provide: XHRBackend,
        useClass: MockBackend
      }]
    });
  });

  it('should ...', inject([BookDataService], (service: BookDataService) => {
    expect(service).toBeTruthy();
  }));
});
