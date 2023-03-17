function calculate() {
  	// Get user input values
	const income = document.getElementById("income").value;
	const balance = document.getElementById("balance").value;
	const expenses = document.getElementById("expenses").value;
	const goal = document.getElementById("goal").value;

  	// Calculate savings and percent saved
	const savings = income - expenses;
	const percentSaved = ((savings / income) * 100).toFixed(2);

  	// Calculate months to save for current balance and financial goal
	let monthsToSave;
	let monthsToGoal;

	if (goal && goal > balance) {
		monthsToGoal = Math.ceil((goal - balance) / savings);
	} else {
		monthsToGoal = "N/A";
	}

	if (balance > 0 && savings > 0) {
		monthsToSave = Math.ceil(balance / savings);
	} else {
		monthsToSave = "0";
	}

	// Update feedback message with calculation results
	const feedback = document.getElementById("feedback");
	feedback.innerHTML = `
		<p>Your monthly savings is ${savings}.</p>
		<p>You're saving ${percentSaved}% of your income.</p>
		<p>It will take you ${monthsToSave} months to save up for your current bank balance.</p>
		<p>It will take you ${monthsToGoal} months to reach your financial goal.</p>
	`;
	feedback.style.display = "block";
}
