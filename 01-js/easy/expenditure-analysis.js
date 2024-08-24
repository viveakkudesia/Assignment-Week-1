/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const totals = {}; // Create an object to hold the total amount spent by category

  // Loop through all transactions and accumulate totals for each category
  for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i];
    if (totals[t.category]) {
      totals[t.category] += t.price;
    } else {
      totals[t.category] = t.price;
    }
  }

  // Convert the totals object to an array of objects
  const result = [];
  for (const category in totals) {
    result.push({
      category: category,
      totalSpent: totals[category],
    });
  }

  return result; // Return the result array
}



module.exports = calculateTotalSpentByCategory;
