
import { TestBed, async, tick, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersComponent } from './players.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, Scheduler, asyncScheduler } from 'rxjs';
import { Player } from '../../shared/player';
import { PlayersService } from '../../shared/players.service';

describe('PlayersComponent', () => {

  const playersServiceStub = {
    getList(): Observable<Player[]> {
      const players: Player[] = [{
        id: 1,
        name: 'Joel Armia\\armiajo01',
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
        id: 99,
        name: 'Joel Armia\\armiajo01',
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
      return of(players);
    }
  };

  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let playersService: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        PlayersComponent
      ],
      providers: [{
        provide: PlayersService, useValue: playersServiceStub
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    playersService = TestBed.get(PlayersService);

  });

  it('should retrieve a list of hockey players', () => {
    expect(component.players.length).toEqual(0);
    spyOn(component, 'ngOnInit').and.callThrough(); // Call through will delegate the function call.

    fixture.detectChanges();  // Trigger ngOnInit
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.players.length).toEqual(2);
  });

});


