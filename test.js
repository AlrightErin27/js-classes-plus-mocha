const expect = chai.expect;
const assert = chai.assert;

describe('🏦 BankAccount class', () => {
    it('exists', () => {
        expect(BankAccount).to.be.a('function');
    })
    it('should have property `accountType`', () => {
        const bank = new BankAccount('savings');
        expect(bank).to.have.property('accountType');
    })
    it('should have a `total` static property initialized to 0', () => {
        expect(BankAccount.total).to.eq(0);
    })
    it('should have property `balance` initialized to 0', () => {
        const bank = new BankAccount('checking');
        expect(bank).to.have.property('balance');
        expect(bank.balance).to.eq(0);
    })
    
    describe('BankAccount methods', () => {
        let checkingAccount = new BankAccount('Checking');
        describe('the `deposit` method', () => {
            it('should have balance update after deposit', () => {
                checkingAccount.deposit(100);
                expect(checkingAccount.balance).to.eq(100);
            })
            it('should update the static `total` after deposit', () => {
                expect(BankAccount.total).to.eq(100);
            })
        })
        describe('the `withdraw` method', () => {
            it('should have balance update after withdraw', () => {
                checkingAccount.withdraw(30);
                expect(checkingAccount.balance).to.eq(70);
            })
            it('should update the static `total` after withdraw', () => {
                expect(BankAccount.total).to.eq(70);
            })
        })

    })
})

describe('🏦 BankAccount class pt.2!', () => {
    let savingsAccount = new BankAccount('Savings');
    if('should have property `overdraftFees`', () => {
        expect(savingsAccount).to.have.property('overdraftFees');
    })
    describe('Overdraft fees', () => {
        it('should update `overdraftFees` after withdrawing too much', () => {
            savingsAccount.withdraw(20);
            expect(savingsAccount.overdraftFees).to.eq(20);
        })
    })
})

describe('🧒 ChildBankAccount Class', () => {
    let childAccount = new ChildBankAccount('Savings');
    it('exists', () => {
        expect(ChildBankAccount).to.be.a('function');
    })
    it('should have property `accountType`', () => {
        expect(childAccount).to.have.property('accountType');
    })
    describe('Withdraw method override', () => {
        it('balance should remaing the same after attempting to withdraw too much', () => {
            childAccount.withdraw(1000);
            expect(childAccount.balance == 0);
        })
    })
})