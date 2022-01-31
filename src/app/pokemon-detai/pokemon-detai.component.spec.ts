import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetaiComponent } from './pokemon-detai.component';

describe('PokemonDetaiComponent', () => {
  let component: PokemonDetaiComponent;
  let fixture: ComponentFixture<PokemonDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
