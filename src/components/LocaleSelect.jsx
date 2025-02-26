export const LocaleSelect = ({ value, onChange }) => {

  const handleChange = e => onChange(e.target.value);

  return (
    <select value={value} onChange={handleChange}>
      <option>한국어</option>
      <option>영어</option>
    </select>
  );
};