import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinocostasPage } from './treinocostas.page';

describe('TreinocostasPage', () => {
  let component: TreinocostasPage;
  let fixture: ComponentFixture<TreinocostasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TreinocostasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
