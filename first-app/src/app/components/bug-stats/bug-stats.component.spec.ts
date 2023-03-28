import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugStatsComponent } from './bug-stats.component';

describe('BugStatsComponent', () => {
  let component: BugStatsComponent;
  let fixture: ComponentFixture<BugStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
