import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersComponent } from './players.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayersService } from '../../shared/players.service';
import { PlayersServiceStub } from '../../shared/tests/players.service.stub';
import { PrettierPlayerNamePipe } from '../../pipes/prettier-player-name.pipe';

describe('PlayersComponent', () => {

  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        PlayersComponent,
        PrettierPlayerNamePipe
      ],
      providers: [{
        provide: PlayersService, useClass: PlayersServiceStub
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;

  });

  it('should retrieve a list of hockey players', () => {
    expect(component.players.length).toEqual(0);
    spyOn(component, 'ngOnInit').and.callThrough(); // Call through will delegate the function call.

    fixture.detectChanges();  // Trigger ngOnInit
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.players.length).toEqual(2);
  });

});


