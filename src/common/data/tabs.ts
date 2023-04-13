import { EStatus } from "../../interfaces/Todo/ITodo";

const tabs = [
  { name: "All", value: [EStatus.DONE, EStatus.TODO, EStatus.PENDING] },
  { name: "Todo", value: [EStatus.TODO] },
  { name: "Pending", value: [EStatus.PENDING] },
  { name: "Done", value: [EStatus.DONE] },
];
export default tabs;
