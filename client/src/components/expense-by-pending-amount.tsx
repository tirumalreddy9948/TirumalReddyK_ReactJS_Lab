
import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense"
import {getUniquePayeeNames, getGrandTotal, getTotalExpenseByPayee} from "../services/expense-utils"

type ExpenseByPendingAmountModel = {
    expenseItems : IExpenseItem[];

}

const ExpenseByPendingAmount = ({expenseItems} : ExpenseByPendingAmountModel) =>{

   
const uniquePayeeNames = getUniquePayeeNames(expenseItems);

const getPendingAmount = (payeeName : String) =>{
 
     const totalExpense = getGrandTotal(expenseItems);
     const totalExpenseByPayee =  getTotalExpenseByPayee(payeeName, expenseItems); 
     const halfAmount = totalExpense/2;

     if(totalExpenseByPayee >= halfAmount){
        return 0;
     }
     else{
        return (halfAmount - totalExpenseByPayee)
     }

}

return(
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Payee {`<=>`} Payee </th>
                <th>Pending Amount</th>
            </tr>
        </thead>
        <tbody>

            {
                uniquePayeeNames.map(  (payeeName, index) => {

                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{payeeName}</td>
                            <td>{getPendingAmount(payeeName)}</td>
                        </tr>
                    )
                })
            }
          

        </tbody>
    </Table>

    );
}

export {ExpenseByPendingAmount}