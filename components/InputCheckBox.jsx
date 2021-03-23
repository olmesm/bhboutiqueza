import camelCase from "lodash/camelCase";
import { UIDConsumer } from "react-uid";

export const InputCheckBox = (props) => (
  <UIDConsumer>{(id) => <Input {...props} _uniqueId={id} />}</UIDConsumer>
);

const Input = ({
  register,
  required,
  name,
  label,
  statement,
  errors,
  errorMessage,
  hint,
  _uniqueId,
}) => {
  const camelName = camelCase(name || label);
  const _statement = statement || "I agree";

  return (
    <div className="form-group">
      <div className="form-check">
        <input
          className={`form-check-input${
            errors[camelName] ? " is-invalid" : ""
          }`}
          ref={register({ required })}
          type="checkbox"
          id={_uniqueId}
          name={camelName}
          aria-describedby={`${_uniqueId}-feedback`}
        />
        <label className="form-check-label" htmlFor={_uniqueId}>
          {_statement}
        </label>

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
    </div>
  );
};
