class PoneyService {
  poneys = [
    {
      id: 1,
      name: 'Poney 1',
      color: 'red',
      odds: 1,
      betCount: 3,
    },
    {
      id: 2,
      name: 'Poney 2',
      color: 'blue',
      odds: 2,
      betCount: 3,
    },
    {
      id: 3,
      name: 'Poney 3',
      color: 'green',
      odds: 3,
      betCount: 3,
    },
    {
      id: 4,
      name: 'Poney 4',
      color: 'yellow',
      odds: 4,
      betCount: 3,
    },
    {
      id: 5,
      name: 'Poney 5',
      color: 'orange',
      odds: 5,
      betCount: 3,
    }
  ];

  getPoneys() {
    return this.poneys;
  }

  getPoney(id: number) {
    return this.poneys.find(poney => poney.id === id);
  }

  addPoney(poney:any) {
    poney.id=this.poneys.length+1;
    poney.betCount=3;
    return this.poneys.push(poney);
  }
}
export default new PoneyService;