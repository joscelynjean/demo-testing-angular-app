import { PlayersService } from './players.service';
import { TestBed, async, tick, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Player } from './player';
import { Observable, of, Scheduler, asyncScheduler } from 'rxjs';

describe('AppComponent', () => {

  const playersServiceStub = {
    getList(): Observable<Player[]> {
      const players: Player[] = [{
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
      return of(players);
    }
  };

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let playersService: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{
        provide: PlayersService, useValue: playersServiceStub
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    playersService = TestBed.get(PlayersService);

  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'List of hockey players!'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('List of hockey players!');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('List of hockey players!');
  });

  it('should retrieve a list of hockey players', () => {
    expect(component.players.length).toEqual(0);
    spyOn(component, 'ngOnInit').and.callThrough(); // Call through will delegate the function call.

    fixture.detectChanges();  // Trigger ngOnInit
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.players.length).toEqual(2);
  });

});


