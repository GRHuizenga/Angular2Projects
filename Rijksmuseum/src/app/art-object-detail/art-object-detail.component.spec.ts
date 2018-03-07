import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectDetailComponent } from './art-object-detail.component';

describe('ArtObjectDetailComponent', () => {
  let component: ArtObjectDetailComponent;
  let fixture: ComponentFixture<ArtObjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtObjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
