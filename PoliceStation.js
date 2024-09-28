class PoliceStation {
    constructor() {
      this.cases = [];
    }
  
    addCase(caseNumber, suspectName, status) {
      this.cases.push({ caseNumber, suspectName, status });
    }
  
    findCaseByNumber(caseNumber) {
      return this.cases.find(c => c.caseNumber === caseNumber);
    }
  
    findCaseBySuspectName(suspectName) {
      return this.cases.find(c => c.suspectName === suspectName);
    }
  
    getAllCases() {
      return this.cases.map(c => `Дело №${c.caseNumber}: подозреваемый ${c.suspectName}, статус - ${c.status}`);
    }
  }

  const policeStation = new PoliceStation();
  policeStation.addCase(101, 'Анвар Холиков', 'расследуется');
  policeStation.addCase(102, 'Рухшона Давлатова', 'открыто');
  policeStation.addCase(103, 'Сомон Усмонов', 'закрыто');
  console.log('Поиск дела по номеру:', policeStation.findCaseByNumber(102));
  console.log('Поиск дела по имени подозреваемого:', policeStation.findCaseBySuspectName('Анвар Холиков'));
  console.log('Все текущие дела:', policeStation.getAllCases());
  