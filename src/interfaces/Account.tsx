interface Operation {
  date: string;
  description: string;
  amount: number;
}

interface Account {
  name: string;
  balance: number;
  color: string;
  operations: Array<Operation>;
}

export default Account;
