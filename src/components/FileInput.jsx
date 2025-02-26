export const FileInput = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.files);
  };

  return (
    <input
      type="file"
      accept="image/png, image/jpeg"
      onChange={handleChange}
    />
  );
};