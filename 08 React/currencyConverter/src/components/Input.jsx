import React from 'react'

function InputBox({
    label,
    amount,  // we need amount when it change then we can perform some operations
    onAmountChange,
    onCurrencyChange,
    currencyList = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable} // check for amount i/p type is enabled or disabled
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    // see the above line before && that is a cheker which cheks the method is available or not and and after && we called the onAmountChange method...
                    // many time data come in string we have converted amount in Number
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                // above select is used to select the currency from dropdown
                
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    // e means event fire karna 
                    
                >
                    
                        <option value="usd">
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;