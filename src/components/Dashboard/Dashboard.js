import React, {useState, useEffect} from "react";


function Dashboard({user}) {
    const [accounts, setAccounts] = useState();

    const API_URL = 'http://localhost:5000/customers/'+ JSON.parse(sessionStorage['token'])['current_user'] +'/accounts';

    useEffect(() => {
        fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(sessionStorage['token'])['token']
            }
        })
        .then(res => {
            return res.json()
        }).then(data => {
            setAccounts(data['accounts']);
        })
    }, [setAccounts]);

    return (
        // <div>
        // <h2>Dashboard</h2>
        // <h3>Customer Accounts</h3>

        // {accounts && accounts.map((account) => (
        //     <div key={account.id} >
        //         <h3>Account</h3>
        //         <p>Branch Address: {account['branch_address']}</p>
        //         <p>Account Type: {account['type']}</p>
        //         <p>Balance: {account['balance']}</p>
        //         </div>
        // ))}
  

        // </div>
        <section>
  <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
    <div class="flex items-center justify-between">
      <h2 class="font-semibold text-slate-900">Accounts</h2>
      <a href="/new" class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
        See all
      </a>
    </div>
    <form class="group relative">
      <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter accounts" placeholder="Filter accounts..." />
    </form>
  </header>

  
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-green-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Account Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Account Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Balance
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    454342546547
                </th>
                <td class="px-6 py-4">
                    Savings
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="/preferences" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</section>

    );
}

export default Dashboard;