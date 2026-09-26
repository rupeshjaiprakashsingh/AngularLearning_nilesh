import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeConmponent } from './home-component';

describe('HomeConmponent', () => {
  let component: HomeConmponent;
  let fixture: ComponentFixture<HomeConmponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConmponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeConmponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
