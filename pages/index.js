import { useForm } from "react-hook-form";
import { parse } from "query-string";
import get from "lodash/get";

import { DumbPageSuccess, DumbPageError } from "../dumb-pages";
import { InputText } from "../components/InputText";
import { InputSelector } from "../components/InputSelector";

const FormCustomerDetails = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputSelector
        label="Title"
        register={register}
        errors={errors}
        errorMessage="This field is required"
        required
        options={["Mr", "Mrs", "Ms", "Miss", "Dr", "Mx"]}
      />

      <InputText
        required
        label="First Name"
        name="name"
        register={register}
        errors={errors}
        errorMessage="This field is required"
      />

      <InputText
        required
        label="Surname"
        register={register}
        errors={errors}
        errorMessage="This field is required"
      />

      <InputText
        label="Email"
        register={register}
        errors={errors}
        pattern={
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        }
        errorMessage="This does not appear to be a valid email address"
      />

      <InputText
        name="Telephone"
        label="Telephone Number"
        register={register}
        errors={errors}
        errorMessage="This field is required"
      />

      <InputText
        required
        label="Address Line 1"
        name="Address 1"
        register={register}
        errors={errors}
        errorMessage="This field is required"
      />

      <InputText
        required
        label="Address Line 2"
        name="Address 2"
        register={register}
        errors={errors}
        errorMessage="This field is required"
      />

      <InputText
        label="Postcode"
        register={register}
        errors={errors}
        required
        errorMessage="This field is required"
      />

      <input type="submit" className="btn btn-primary mr-3" />
    </form>
  );
};

// const getParam = (param) => {
//   const urlSearchParams = window && parse(get(window, "location.search", {}));
//   return get(urlSearchParams, param);
// };

export default function App() {
  return (
    <>
      <main className="container">
        <FormCustomerDetails />

        <DumbPageSuccess />

        <DumbPageError />

        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </main>
    </>
  );
}
