import { useForm } from "react-hook-form";
import { parse } from "query-string";
import get from "lodash/get";

import { DumbPageSuccess, DumbPageError } from "../dumb-pages";
import { InputText } from "../components/InputText";
import { InputSelector } from "../components/InputSelector";
import { Card } from "../components/Card";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const FormCustomerDetails = () => {
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(alert("success"))
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-netlify="true">
      <input type="hidden" name="form-name" value="order-form" />

      <Card
        setValue={setValue}
        getValues={getValues}
        register={register}
        name="Bag of Cats"
        image="https://thiscatdoesnotexist.com"
        description="Sed neque neque, sollicitudin quis ex quis, fringilla pellentesque eros. Ut consequat dictum iaculis. Cras dictum nunc lectus, quis imperdiet nunc scelerisque eu. Ut fringilla enim sit amet est facilisis, nec faucibus nulla vestibulum. Sed auctor sit amet nunc in venenatis. Pellentesque nec ullamcorper ligula. Curabitur urna ex, imperdiet vel iaculis vel, ultrices in sapien."
      />
      <Card
        setValue={setValue}
        getValues={getValues}
        register={register}
        name="Collection of Sausages"
        image="https://thishorsedoesnotexist.com/"
        description="Fringilla pellentesque eros. Quis imperdiet nunc scelerisque eu. Ut fringilla enim sit amet est facilisis, nec faucibus nulla vestibulum. Sed auctor sit amet nunc in venenatis. Pellentesque nec ullamcorper ligula. Curabitur urna exn."
      />

      <InputSelector
        label="Title"
        register={register}
        errors={errors}
        errorMessage="This field is required"
        required
        options={["Mr", "Mrs", "Ms", "Miss", "Dr", "Mx"]}
      />

      <InputText
        _required
        label="First Name"
        name="name"
        register={register}
        errors={errors}
        errorMessage="This field is required"
      />

      <InputText
        _required
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
        _required
        label="Address Line 1"
        name="Address 1"
        register={register}
        errors={errors}
        errorMessage="This field is required"
      />

      <InputText
        _required
        label="Address Line 2"
        name="Address 2"
        register={register}
        errors={errors}
        errorMessage="This field is required"
      />

      <InputText
        _required
        label="Postcode"
        register={register}
        errors={errors}
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
