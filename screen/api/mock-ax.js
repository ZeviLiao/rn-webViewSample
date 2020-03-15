import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

mock.onGet(/\/todos\/1/).reply(200, {
  users: [
    { id: 1, name: "John Smith", title: "title" },
    { id: 2, name: "John Doe" }
  ]
});

export default mock;
