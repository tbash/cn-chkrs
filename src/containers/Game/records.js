import { Record } from 'immutable';

const PlayerRecord = Record({
  id: null,
  score: 0,
  color: '',
});

export class Player extends PlayerRecord {
  id() { return this.get('id'); }
  score() { return this.get('score'); }
  color() { return this.get('color'); }
}

const PositionRecord = Record({
  occupyingPlayer: null,
  scoringPlayer: null,
  index: null,
  row: null,
  col: null,
});

export class Position extends PositionRecord {
  occupyingPlayer() { return this.get('occupyingPlayer'); }
  scoringPlayer() { return this.get('scoringPlayer'); }
  index() { return this.get('index'); }
  row() { return this.get('row'); }
  col() { return this.get('col'); }
  isScoring() { return this.occupyingPlayer() === this.scoringPlayer(); }
}
