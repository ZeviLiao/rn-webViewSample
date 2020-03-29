import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

mock.onGet(/\/todos\/1/).reply(200, {
  id: 1,
  name: "John Smith",
  title: "title"
});

// mock.restore();

export default mock;
