import camelCase from "lodash/camelCase";
import { UIDConsumer } from "react-uid";

export const InputSelector = (props) => (
  <UIDConsumer>{(id) => <Input {...props} _uniqueId={id} />}</UIDConsumer>
);

const Input = ({
  register,
  name,
  label,
  required,
  options,
  errors,
  errorMessage,
  _uniqueId,
}) => {
  const camelName = camelCase(name || label);

  return (
    <div className="form-group">
      <label htmlFor={_uniqueId}>{label}</label>
      <select
        className={`form-control${errors[camelName] ? " is-invalid" : ""}`}
        id={_uniqueId}
        ref={register({ required })}
        name={camelName}
        aria-describedby={`${_uniqueId}-feedback`}
      >
        {options.map((option) => {
          const _camelName = camelCase(option);

          return (
            <option key={_camelName} value={_camelName}>
              {option}
            </option>
          );
        })}
      </select>
      {errors[camelName] && (
        <div id={`${_uniqueId}-feedback`} className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
