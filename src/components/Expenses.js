import ExpenseItem from "./ExpenseItem";

function Expenses( {items} ) {

    console.log(items);

    return <div>
        {items.map((item) => 
            <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date} />
        )}
    </div>

}

export default Expenses;