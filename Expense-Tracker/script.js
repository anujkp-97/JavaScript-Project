
const state = {
    earnings: 0,
    expense: 0,
    net: 0,
    transactions: [
        // {id: '4',
        // text: "text",
        // amount: 10,
        // type: "credit",}

    ],
};


const transactionFormEl = document.getElementById('transactionForm')

const renderTransactions = () =>{

    const transactionContainerEl = document.querySelector('.transactions')
    const netAmountEl = document.getElementById('netAmount')
    const earningEl = document.getElementById('earning')
    const expenseEl = document.getElementById('expense')

    const transactions = state.transactions;

    let earning = 0
    let expense = 0;
    let net =0;

    transactionContainerEl.innerHTML =""

    transactions.forEach((transaction) =>{

        const {id, amount, text, type} = transaction;
        const isCredit = type == "credit" ? true : false;
        const sign = isCredit ? "+" : "-";

        const transactionEl = ` <div class="transaction" id={${id}}>
                        <div class="left">
                            <p>${text}</p>
                            <p>${sign} $ ${amount}</p>
                        </div>
                        <div class="status ${isCredit ? "credit" : "debit"} ">
                            ${isCredit? "C" : "D"}
                        </div>
                        <div class="trash" onclick="handleDelete(${id})">
                            <button><img id="icon" src="./trash.png" alt=""></button>
                             
                        </div>
                    </div>`

        earning += isCredit ? amount : 0;
        expense += !isCredit ? amount : 0;


        // console.log("earning", earning);
        // console.log("expense", expense);
        

        net = earning - expense;

        console.log("net", net);
        
        
        transactionContainerEl.insertAdjacentHTML("afterbegin", transactionEl)

    })

    netAmountEl.innerHTML = `$ ${net}`
    earningEl.innerHTML = `$ ${earning}`
    expenseEl.innerHTML = `$ ${expense}`

}



const addTransaction = (e) =>{
    e.preventDefault();
    // console.log(e.submitter.id);

    const isEarn = e.submitter.id === "earnBtn" ? true : false;

    //console.log(isEarn);
    

    const formData = new FormData(transactionFormEl);

    const tData ={};

    formData.forEach((value, key) => {
        tData[key] = value

    })

    const {text, amount} = tData;
    // console.log("text", text);
    // console.log("amount", amount);
    
    
    const transaction = {
        id: Math.floor(Math.random() * 1000),
        text: text,
        amount: +amount,
        type: isEarn ? "credit" : "debit",
    }

    //console.log(transaction.type);
    
    state.transactions.push(transaction)
    renderTransactions()
    //console.log({state});
    
    transactionFormEl.elements['text'].value = "";
    transactionFormEl.elements['amount'].value = "";
    
}

const handleDelete = (id) =>{

    state.transactions = state.transactions.filter(t => t.id !== id);
    renderTransactions();
    
}

renderTransactions()
transactionFormEl.addEventListener('submit', addTransaction)