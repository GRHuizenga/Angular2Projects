import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectListComponent } from './art-object-list.component';

describe('ArtObjectListComponent', () => {
  let component: ArtObjectListComponent;
  let fixture: ComponentFixture<ArtObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
