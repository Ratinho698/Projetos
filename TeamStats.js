const team = {
    _players: [
      {firstName: "Agustin", lastName: "Marchesin", age: 34},
      {firstName: "Francisco", lastName: "Conceição", age: 19},
      {firstName: "Medhi", lastName: "Taremi", age: 29}
    ],
    _games: [
      {opponent: "Braga", teamPoint: 0, oponnentPoints: 1},
      {oponnent: "Sporting", teamPoints: 1, oponnentPoints: 0},
      {oponnent: "Portimonense", teamPoints: 7, oponnentPoints: 0}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOponnent, newTeamPoints, newOponnentPoints) {
      let game = {
        oponnent: newOponnent,
        teamPoints: newTeamPoints,
        oponnentPoints: newOponnentPoints
      };
      this.games.push(game);
    }
  };
  team.addPlayer('Toni', 'Martinez', 24);
  team.addGame('Vitória SC', 1, 0);
  console.log(team.players);
  console.log(team.games);