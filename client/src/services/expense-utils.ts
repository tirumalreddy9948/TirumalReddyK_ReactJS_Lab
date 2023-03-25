import IExpenseItem from "../models/expense"


const getUniquePayeeNames = (expenseItems : IExpenseItem[]) => {

    const uniquePayeeNames : String[] = [] ;
    expenseItems.forEach( (expenseItem) =>{

        let payeeeName = expenseItem.payeeName;
        if(!uniquePayeeNames.includes(payeeeName)){
            uniquePayeeNames.push(payeeeName);
        }
    })

    return uniquePayeeNames;

}

const getGrandTotal = (expenseItems : IExpenseItem[]) => {

    let grandTotalAmount = 0;
    
    expenseItems.forEach( (expenseItem) => {

        grandTotalAmount += expenseItem.price;        

    })

    return grandTotalAmount;

}


const getTotalExpenseByPayee = (payeeName : String, expenseItems : IExpenseItem[]) => {
        
    let totalContributedAmount = 0;
    
    expenseItems.forEach( (expenseItem) => {

         if(expenseItem.payeeName === payeeName){
            totalContributedAmount += expenseItem.price;
         }
    })

    return totalContributedAmount;
}




export {getUniquePayeeNames, getGrandTotal, getTotalExpenseByPayee }