import { Record } from 'immutable';

const PlayerRecord = Record({
  score: 0,
  color: '',
});

export class Player extends PlayerRecord {
  score() { return this.get('score'); }
  color() { return this.get('color'); }
}

const PositionRecord = Record({
  occupyingPlayer: null,
  scoringPlayer: null,
  row: null,
});

export class Position extends PositionRecord {
  occupyingPlayer() { return this.get('occupyingPlayer'); }
  scoringPlayer() { return this.get('scoringPlayer'); }
  row() { return this.get('row'); }
  isScoring() { return this.occupyingPlayer() === this.scoringPlayer(); }
  isOccupied() { return !!this.occupyingPlayer(); }
}
