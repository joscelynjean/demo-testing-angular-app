import { PlayersServiceStub } from './tests/players.service.stub';
import { TestBed } from '@angular/core/testing';

import { PlayersService } from './players.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PlayersService', () => {

  // We declare the variables that we'll use for the Test Controller and for our Service
  let httpTestingController: HttpTestingController;
  let service: PlayersService;

  // Setup
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [PlayersService],
      imports: [HttpClientTestingModule]
    });

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PlayersService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of players', done => {
    service.getList().subscribe(players => {
      expect(players.length).toEqual(2);
      done();
    });

    const req = httpTestingController.expectOne('http://localhost:3000/players');
    expect(req.request.method).toEqual('GET');
    req.flush(PlayersServiceStub.PLAYERS);

  });

  it('should return player with id 99', done => {
    service.getPlayer(99).subscribe(player => {
      expect(player.id).toEqual(99);
      done();
    });

    const req = httpTestingController.expectOne('http://localhost:3000/players/99');
    expect(req.request.method).toEqual('GET');
    req.flush(PlayersServiceStub.PLAYERS.find((player, index, array) => player.id === 99));
  });

});
