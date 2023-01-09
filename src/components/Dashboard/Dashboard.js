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
        <div>
        <h2>Dashboard</h2>
        <h3>Customer Accounts</h3>

        {accounts && accounts.map((account) => (
            <div key={account.id} >
                <h3>Account</h3>
                <p>Branch Address: {account['branch_address']}</p>
                <p>Account Type: {account['type']}</p>
                <p>Balance: {account['balance']}</p>
                </div>
        ))}
  

        </div>
    );
}

export default Dashboard;