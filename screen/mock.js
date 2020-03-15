import Mock from "mockjs";

// Mock.setup({
//     timeout: '200-600'
// })

export default Mock.mock(/\/todos\/1/, "get", {
  id: 1,
  user: "a",
  title: "title",
  "password|1-100": 100
});
