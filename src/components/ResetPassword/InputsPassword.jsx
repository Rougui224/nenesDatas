export function InputsPasswords({
  id,
  name,
  type,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  );
}
