import axios from "axios";
import IExpenseItem, { IExpenseCreateItem } from "../models/expense";

const GET_EXPENSE_ITEM_URL = "http://localhost:4000/items";

//const GET_EXPENSE_ITEM_URL = "http://localhost:4000/items?_sort=date&_order=desc";

const getAllExpenseItems =  async() => {

   const response = await axios.get<IExpenseItem[]>(GET_EXPENSE_ITEM_URL);

   return response.data;
}

const POST_EXPENSE_ITEM_URL = "http://localhost:4000/items";



const postExpenseitem =  async(newExpenseItem : IExpenseCreateItem) => {

   const response = await axios.post<IExpenseItem[]>(POST_EXPENSE_ITEM_URL, newExpenseItem,{
      headers :{
         'Content-type' : 'application/json'
      }
   } );

   return response.data;
}


export {getAllExpenseItems, postExpenseitem}
