import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { SquareComponent } from '../square/square.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent, SquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty board', () => {
    expect(component.square.length).toBe(9);
    expect(component.square.every(s => s === null)).toBe(true);
    expect(component.xIsNext).toBe(true);
    expect(component.winner).toBe(null);
  });

  it('should return correct player', () => {
    expect(component.player).toBe('X');
    component.xIsNext = false;
    expect(component.player).toBe('O');
  });

  it('should make move correctly', () => {
    component.makeMove(0);
    expect(component.square[0]).toBe('X');
    expect(component.xIsNext).toBe(false);
    component.makeMove(1);
    expect(component.square[1]).toBe('O');
  });

  it('should not make move on occupied square', () => {
    component.makeMove(0);
    component.makeMove(0);
    expect(component.square[0]).toBe('X');
    expect(component.xIsNext).toBe(false);
  });

  it('should detect winner', () => {
    component.square = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(component.calculateWinner()).toBe('X');
  });

  it('should detect draw', () => {
    component.square = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(component.calculateWinner()).toBe('Draw');
  });

  it('should reset game', () => {
    component.makeMove(0);
    component.newGame();
    expect(component.square.every(s => s === null)).toBe(true);
    expect(component.winner).toBe(null);
    expect(component.xIsNext).toBe(true);
  });
});
