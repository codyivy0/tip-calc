export default function BillInput({ bill, setBill }) {
  function handleChange(e) {
    setBill(e.target.value);
  }

  return (
    <>
      <label>What was the price of your bill? </label>
      <input
        type="number"
        placeholder="Bill amount?"
        value={bill}
        onChange={handleChange}
      />
    </>
  );
}
