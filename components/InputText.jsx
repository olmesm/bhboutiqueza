import camelCase from "lodash/camelCase";
import { UIDConsumer } from "react-uid";

export const InputText = (props) => (
  <UIDConsumer>{(id) => <Input {...props} _uniqueId={id} />}</UIDConsumer>
);

const Input = ({
  register,
  name,
  label,
  errors,
  errorMessage,
  required,
  disabled,
  hint,
  pattern,
  _uniqueId,
}) => {
  const camelName = camelCase(name || label);

  return (
    <div className="form-group">
      <label htmlFor={_uniqueId}>{label}</label>
      <input
        className={`form-control${errors[camelName] ? " is-invalid" : ""}`}
        disabled={disabled}
        id={_uniqueId}
        name={camelName}
        ref={register({ required, pattern })}
        aria-describedby={`${_uniqueId}-feedback`}
      />

      {hint && !errors[camelName] && (
        <small id={`${_uniqueId}-feedback`} className="form-text text-muted">
          {hint}
        </small>
      )}
      {errors[camelName] && (
        <div id={`${_uniqueId}-feedback`} className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
