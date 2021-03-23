import camelCase from "lodash/camelCase";
import { UIDConsumer } from "react-uid";

export const Card = (props) => (
  <UIDConsumer>{(id) => <Input {...props} _uniqueId={id} />}</UIDConsumer>
);

const Input = ({
  setValue,
  getValues,
  register,
  name,
  image,
  description,
  label,
  _uniqueId,
}) => {
  const camelName = camelCase(name || label);
  const increment = () => {
    const qty = getValues()[camelName];
    const _qty = Number(qty) + 1;
    setValue(camelName, _qty);
  };
  const reset = () => {
    setValue(camelName, 0);
  };

  return (
    <>
      <div className="card mb-3 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-4" style={{ height: "300px" }}>
            <img
              src={image}
              alt=""
              className="h-100"
              style={{ width: "inherit", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
            </div>
            <div className="card-footer bg-transparent border-top-0 w-25">
              <div className="input-group">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={increment}
                  id={_uniqueId}
                >
                  +
                </button>
                <input
                  ref={register}
                  type="number"
                  defaultValue={0}
                  name={camelName}
                  className="form-control"
                  id={_uniqueId}
                  aria-describedby={_uniqueId}
                  aria-label={`quantity of ${name}`}
                  readOnly
                />
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={reset}
                  id={_uniqueId}
                >
                  0
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
