'use strict';

let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

function showAccounts(acc: any[]) {
  Object.keys(acc).forEach(index => {
    console.log(`Account holder: ${acc[index].client_name} number: ${acc[index].account_number} balance: ${acc[index].balance}`);  
  });
  console.log();
}

function getNameAndBalance(AccNum) {
  let returnResult: any;
  let isAccNumValid: boolean = false;

  Object.keys(accounts).forEach(index => {
    if (AccNum == accounts[index].account_number) {
      returnResult = parseInt(index, 10);
      isAccNumValid = true;
    }
  });
  
  if (!isAccNumValid) {
    returnResult = 'Not valid account number';
  }

  return returnResult;
}

function transferAmount(fromAcc: number, toAcc: number, ammount: number) {
  let answer1: any;
  let answer2: any;
  let cont: boolean = true;
  
  answer1 = getNameAndBalance(fromAcc);
  if (typeof answer1 == 'string') {
    console.log(`404 - account not found (${fromAcc})\n`);
    cont = false;
  }

  answer2 = getNameAndBalance(toAcc);
  if (typeof answer2 == 'string')  {
    console.log(`404 - account not found (${toAcc})\n`);
    cont = false;
  }

  if (cont) {
    console.log(`${ammount} unit has just been transfered from ${fromAcc} to ${toAcc}\n`);
    accounts[answer1].balance -= ammount;
    accounts[answer2].balance += ammount;
  }
}

showAccounts(accounts);

transferAmount(11234543, 43546731, 500);

showAccounts(accounts);

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};
