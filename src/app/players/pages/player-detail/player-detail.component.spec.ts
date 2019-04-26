import { PrettierPlayerNamePipe } from './../../components/prettier-player-name.pipe';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayersService } from '../../shared/players.service';
import { PlayersServiceStub } from '../../shared/tests/players.service.stub';
import { PlayerDetailComponent } from './player-detail.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Location } from '@angular/common';

describe('PlayerDetailComponent', () => {

  let component: PlayerDetailComponent;
  let fixture: ComponentFixture<PlayerDetailComponent>;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        PlayerDetailComponent,
        PrettierPlayerNamePipe
      ],
      providers: [
        { provide: PlayersService, useClass: PlayersServiceStub },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ 'id': '99' }) } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerDetailComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);

  });

  it('should retrieve a single hockey player', () => {
    expect(component.player).toBeUndefined();
    spyOn(component, 'ngOnInit').and.callThrough(); // Call through will delegate the function call.

    fixture.detectChanges();  // Trigger ngOnInit
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.player).toBeDefined();
    expect(component.player.id).toEqual(99);
  });

  it('should go back', () => {
    spyOn(location, 'back');
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });

});


