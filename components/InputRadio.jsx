import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";
import { UIDConsumer } from "react-uid";

export const InputRadio = (props) => (
  <UIDConsumer>{(id) => <Input {...props} _uniqueId={id} />}</UIDConsumer>
);

const Input = ({
  register,
  name,
  question,
  required,
  options,
  defaultChoiceIndex,
  _uniqueId,
}) => {
  const _question = camelCase(name || question);
  const _options = options.map((option) => ({
    option,
    id: `${_uniqueId}-${camelCase(option)}`,
  }));

  return (
    <div className="form-group">
      <p>{question}</p>

      {_options.map(({ option, id }, index) => {
        const camelName = camelCase(option);

        return (
          <div key={camelName} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id={id}
              defaultChecked={index === defaultChoiceIndex}
              name={_question}
              value={camelName}
              ref={register({ required })}
            />
            <label className="form-check-label" htmlFor={id}>
              {startCase(option)}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export const InputRadioYesNo = ({ register, question, required, name }) => {
  const options = ["Yes", "No"];
  return (
    <InputRadio
      name={name}
      question={question}
      required={required}
      register={register}
      options={options}
      defaultChoiceIndex={1}
    />
  );
};
