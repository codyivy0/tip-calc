export default function Output({ bill, percentA, percentB }) {
  const totalPercentAverage = (parseFloat(percentA) + parseFloat(percentB)) / 2;
  const totalDecimal = totalPercentAverage / 100;
  const totalTipAmount = +(bill * totalDecimal).toFixed(2);
  const total = (parseInt(bill) + totalTipAmount).toFixed(2);
  const tip = parseInt(bill) * ((+percentA + +percentB) / 2 / 100);

  return (
    <>
      {!bill ? (
        <h1>Please enter your bill amount</h1>
      ) : (
        <h1>
          You pay ${total} (${bill} + ${tip.toFixed(2)} tip)
        </h1>
      )}
    </>
  );
}
