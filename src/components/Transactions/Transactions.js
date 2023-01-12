import {React , useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Transactions() {
    const API_URL = "http://localhost:5000/accounts";

    const [transactions, setTransactions] = useState([]);

    const {accountId} = useParams();

    const fetchTransactions = () => {
        fetch(`${API_URL}/${accountId}/transactions`
        , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(sessionStorage['token'])['token']
        }})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setTransactions(data['transactions']);
        })
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div>
        <h2>Transactions</h2>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-green-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    From Account
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody>
            {transactions && transactions.map((transaction) => (
                <tr key={transaction['id']} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {transaction['from_account']['account_no']}
                    </th>
                    <td class="px-6 py-4">
                        {transaction['datetime']}
                    </td>
                    <td class="px-6 py-4">
                        {transaction['amount']}
                    </td>
                </tr>
            ))}
            
        </tbody>
    </table>
</div>
        </div>
    );
}

export default Transactions;