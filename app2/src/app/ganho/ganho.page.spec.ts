import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GanhoPage } from './ganho.page';

describe('GanhoPage', () => {
  let component: GanhoPage;
  let fixture: ComponentFixture<GanhoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GanhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
