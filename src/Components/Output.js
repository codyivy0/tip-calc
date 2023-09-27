export default function Output({ bill, percentA, percentB }) {
    const totalPercent = (parseFloat(percentA) + parseFloat(percentB)) / 2;
    const totalDecimal = totalPercent / 100
    const totalTipAmount = bill * totalDecimal
    const total = parseInt(bill) + totalTipAmount


  return (
    <>
      <h1>You pay ${total} (${bill} + ${totalTipAmount} tip)</h1>
    </>
  );
}
