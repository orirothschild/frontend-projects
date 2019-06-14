const team = {
    _players : [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
             age: 11
        },
        {
            firstName: 'Robert',
            lastName: 'Crews',
             age: 13
        },
        {
            firstName: 'Fatty',
            lastName: 'Natty',
             age: 12
        },

    ],
    _games : [
          {
            opponent: 'Real',
            teamPoints: 42,
            opponentPoints: 27
          },
          {
            opponent: 'Barca',
            teamPoints: 32,
            opponentPoints: 26,
          },
          {
            opponent: 'Byren',
            teamPoints: 62,
            opponentPoints: 68,
          }
    ],

    get games(){
        if(this._games == NaN){ return 'falsy games value'}
        return this._games;

    },

    get players(){
        if(this._players == NaN){ return 'falsy players value'}
        return this._players;

    },

    addPlayer (first,last,age) {
        if(first == null || last == null || age == null)
        {
            return `false values inserted`;
        }
        let player = {
            firstName: first,
            lastName: last,
            age: age
        };    
        this.players.push(player);
    }
}
team.addPlayer('steph','curry',28);

console.log(team.players);