let getCurrentDate=() => new Date().toISOString(); // Returns current date in ISO format

let formatCurrency = (amount, currency='USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount)
}

// Forma 1

exports.getCurrentDate  = getCurrentDate
exports.formatCurrency  = formatCurrency

// Forma 2

//module.exports = {getCurrentDate,formatCurrency} // Exporting as an object

