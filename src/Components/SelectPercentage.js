export default function SelectPercent({ percent, setPercent, children }) {
  function handleSelect(e) {
    setPercent(e.target.value);
  }

  return (
    <>
      <p>{children}</p>
      <select onChange={handleSelect}>
        <option value="0">Did not enjoy(0%)</option>
        <option value="5">It was just ok(5%)</option>
        <option value="10">Enjoyed it(10%)</option>
        <option value="15">It was delicious!(15%)</option>
        <option value="20">Amazing! Take my money!(20%)</option>
      </select>
    </>
  );
}
