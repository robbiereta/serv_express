import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

export const App = () => (
  <Admin>
    <Resource
      name="notas"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
