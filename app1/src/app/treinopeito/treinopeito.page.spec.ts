import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreinopeitoPage } from './treinopeito.page';

describe('TreinopeitoPage', () => {
  let component: TreinopeitoPage;
  let fixture: ComponentFixture<TreinopeitoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TreinopeitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
