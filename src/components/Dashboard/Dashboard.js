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
  <ul class="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
    {accounts && accounts.map((account) => (
        <li>
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <svg width="20" height="20" fill="currentColor" class="text-blue-500" aria-hidden="true">

                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                    </svg>
                </div>
                <div class="ml-4">

                    <h6 class="text-slate
                    -900 font-semibold">{account['type']}</h6>
                    <p class="text-slate
                    -600">000000000000</p>
                </div>
            </div>
            <div class="text-right">
                <p class="text-slate-900 font-semibold">$ {account['balance']}</p>

                <p class="text-slate
                -600 font-bold">Available balance</p>
            </div>
        </div>

    </li>
    )) }
  </ul>
</section>

    );
}

export default Dashboard;