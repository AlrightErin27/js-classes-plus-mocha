// Write your code here!

class BankAccount {
    static total = 0;

    constructor(accountType) {
        this.accountType = accountType;
        this.overdraftFees = 0;
        this.balance = 0;
    }
    
    deposit(amount) {
        this.balance += amount;
        BankAccount.total += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
        BankAccount.total -= amount;
        if(this.balance < 0) {
            this.overdraftFees += 20;
        }
    }
}

class ChildBankAccount extends BankAccount {
    constructor(accountType) {
        super(accountType);
    }
    // Override
    deposit(amount) {
        if(this.balance - amount >= 0) {
            super.deposit(amount);
        }
    }
}