export default function Output({ bill, percentA, percentB }) {
  const totalPercent = (parseFloat(percentA) + parseFloat(percentB)) / 2;
  const totalDecimal = totalPercent / 100;
  const totalTipAmount = +(bill * totalDecimal).toFixed(2);
  const total = (parseInt(bill) + totalTipAmount).toFixed(2);

  return (
    <>
      <h1>
        You pay ${total} (${bill} + ${totalTipAmount.toFixed(2)} tip)
      </h1>
    </>
  );
}
