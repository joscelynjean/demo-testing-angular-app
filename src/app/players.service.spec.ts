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
    req.flush(mockPlayers);

  });

  // Mocked data
  const mockPlayers = [{
    jerseyNumber: 40,
    player: 'Joel Armia\\armiajo01',
    flag: 'fi',
    position: 'RW',
    age: 25,
    heigth: '6-4',
    weight: 210,
    experience: '4',
    birthDate: 'May 31 1993',
    summary: '13 G 10 A 23 P',
    salary: '$1850000',
    draft: '2011 BUF 1st (16)'
  },
  {
    jerseyNumber: 40,
    player: 'Joel Armia\\armiajo01',
    flag: 'fi',
    position: 'RW',
    age: 25,
    heigth: '6-4',
    weight: 210,
    experience: '4',
    birthDate: 'May 31 1993',
    summary: '13 G 10 A 23 P',
    salary: '$1850000',
    draft: '2011 BUF 1st (16)'
  }
  ];

});
