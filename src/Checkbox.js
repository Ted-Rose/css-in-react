import "./Checkbox.scss";

const Checkbox = ({ value, onChange }) => (
  <label className="checkbox">
    <input
      className="ic_checkmark"
      type="checkbox"
      checked={value}
      onChange={onChange}
    />
  </label>
);
export default Checkbox;
