import { colors } from 'globalStyles';

const playerColors = [
  colors.RED,
  colors.PURPLE,
  colors.ORANGE,
  colors.BLUE,
  colors.GREEN,
  colors.YELLOW,
];

const TOP          = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const TOP_RIGHT    = [19, 20, 21, 22, 32, 33, 34, 44, 45, 55];
const BOTTOM_RIGHT = [74, 84, 85, 95, 96, 97, 107, 108, 109, 110];
const BOTTOM       = [111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
const BOTTOM_LEFT  = [65, 75, 76, 86, 87, 88, 98, 99, 100, 101];
const TOP_LEFT     = [10, 11, 12, 13, 23, 24, 25, 35, 36, 46];

export const generatePlayers = (playerCount) =>
  playerColors.slice(0, playerCount).map(color => ({ color }));

const between = (x, min, max) => x >= min && x <= max;
const assignRow = (i) => (
  i === 0
    ? 0
    : between(i, 1, 2)
    ? 1
    : between(i, 3, 5)
    ? 2
    : between(i, 6, 9)
    ? 3
    : between(i, 10, 22)
    ? 4
    : between(i, 23, 34)
    ? 5
    : between(i, 35, 45)
    ? 6
    : between(i, 46, 55)
    ? 7
    : between(i, 56, 64)
    ? 8
    : between(i, 65, 74)
    ? 9
    : between(i, 75, 85)
    ? 10
    : between(i, 86, 97)
    ? 11
    : between(i, 98, 110)
    ? 12
    : between(i, 111, 114)
    ? 13
    : between(i, 115, 117)
    ? 14
    : between(i, 118, 119)
    ? 15
    : 16
);

export const generateBoard = (playerCount) => {
  switch(playerCount) {
    case 3:
      return Array.apply(null, Array(121)).map((p, i) => {
        const occupyingPlayer =
          TOP_LEFT.includes(i)
            ? 0
            : TOP_RIGHT.includes(i)
            ? 1
            : BOTTOM.includes(i)
            ? 2
            : null;

        const scoringPlayer =
          BOTTOM_RIGHT.includes(i)
            ? 0
            : BOTTOM_LEFT.includes(i)
            ? 1
            : TOP.includes(i)
            ? 2
            : null;

        const row = assignRow(i);

        return {
          occupyingPlayer,
          scoringPlayer,
          row
        };
      });
    case 4:
      return Array.apply(null, Array(121)).map((p, i) => {
        const occupyingPlayer =
          TOP_LEFT.includes(i)
            ? 0
            : TOP_RIGHT.includes(i)
            ? 1
            : BOTTOM_RIGHT.includes(i)
            ? 2
            : BOTTOM_LEFT.includes(i)
            ? 3
            : null;

        const scoringPlayer =
          BOTTOM_RIGHT.includes(i)
            ? 0
            : BOTTOM_LEFT.includes(i)
            ? 1
            : TOP_LEFT.includes(i)
            ? 2
            : TOP_RIGHT.includes(i)
            ? 3
            : null;

        const row = assignRow(i);

        return {
          occupyingPlayer,
          scoringPlayer,
          row
        };
      });
    case 5:
      return Array.apply(null, Array(121)).map((p, i) => {
        const occupyingPlayer =
          TOP_LEFT.includes(i)
            ? 0
            : TOP.includes(i)
            ? 1
            : TOP_RIGHT.includes(i)
            ? 2
            : BOTTOM_RIGHT.includes(i)
            ? 3
            : BOTTOM_LEFT.includes(i)
            ? 4
            : null;

        const scoringPlayer =
          BOTTOM_RIGHT.includes(i)
            ? 0
            : BOTTOM.includes(i)
            ? 1
            : BOTTOM_LEFT.includes(i)
            ? 2
            : TOP_LEFT.includes(i)
            ? 3
            : TOP_RIGHT.includes(i)
            ? 4
            : null;

        const row = assignRow(i);

        return {
          occupyingPlayer,
          scoringPlayer,
          row
        };
      });
    case 6:
      return Array.apply(null, Array(121)).map((p, i) => {
        const occupyingPlayer =
          TOP_LEFT.includes(i)
            ? 0
            : TOP.includes(i)
            ? 1
            : TOP_RIGHT.includes(i)
            ? 2
            : BOTTOM_RIGHT.includes(i)
            ? 3
            : BOTTOM.includes(i)
            ? 4
            : BOTTOM_LEFT.includes(i)
            ? 5
            : null;

        const scoringPlayer =
          BOTTOM_RIGHT.includes(i)
            ? 0
            : BOTTOM.includes(i)
            ? 1
            : BOTTOM_LEFT.includes(i)
            ? 2
            : TOP_LEFT.includes(i)
            ? 3
            : TOP.includes(i)
            ? 4
            : TOP_RIGHT.includes(i)
            ? 5
            : null;

        const row = assignRow(i);

        return {
          occupyingPlayer,
          scoringPlayer,
          row
        };
      });
    case 2:
    default:
      return Array.apply(null, Array(121)).map((p, i) => {
        const occupyingPlayer =
          TOP.includes(i)
            ? 0
            : BOTTOM.includes(i)
            ? 1
            : null;

        const scoringPlayer =
          BOTTOM.includes(i)
            ? 0
            : TOP.includes(i)
            ? 1
            : null;

        const row = assignRow(i);

        return {
          occupyingPlayer,
          scoringPlayer,
          row
        };
      });
  }
}
