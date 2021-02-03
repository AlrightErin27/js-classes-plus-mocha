# More JavaScript Classes! ... but with Mocha

This exercise has handy tests included to help you know if your code meets the written requirements.

Don't freak out! Testing frameworks make testing your code fun!

It changes line after line of `console.log`s to something more descriptive and robust 

The testing framework used is [Mocha](https://mochajs.org/) with [Chai](https://www.chaijs.com/).


## 🚀 Before you start..
* Open up `index.html` in a browser - you'll see the test results here 
* You'll be working in `bank.js`
* Instructions are here in the `README.md` but you can also look in `test.js` to see what the tests are expecting

## 🚀 Completion looks like..
* All your tests are green!

--- 

## Create a `BankAccount` class.
* Bank accounts should be created with the `accountType` property (like "savings" or "checking").
* Bank accounts should have a class-level (static) variable tracking the total amount of money in all accounts called `total`.
* Each account should keep track of it's current `balance`.
* Each account should have access to a `deposit` and a `withdraw` method.
* Each account should start with a `balance` set to zero.
* The `deposit` and `withdraw` methods need to also update the `total` to keep track of how much money the bank has across all `BankAccount`s
<br>

### Things to think about:
* Any starting values for variables should be set in the `constructor` method
* Static variables are declared using the `static` keyword inside the class but outside any methods
* Instance variables are declared inside the `constructor` method
* Does your `constructor` method need to accept any parameters?
<br>


## Enhance the `BankAccount` class
* Start each account with an additional `overdraftFees` property that starts at zero. If a call to `withdraw` ends with the balance below zero then `overdraftFees` should be incremented by twenty.

## Create a `ChildBankAccount` class
* Create a `ChildBankAccount` class that overrides the `withdraw` method to eliminate the overdraft penalty fee and simply disallow the withdrawal if there aren't enough funds.