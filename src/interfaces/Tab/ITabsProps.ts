import { ITodosProps } from "../Todo/ITodosProps";
import { ITab } from "./ITab";

export interface ITabsProps extends ITodosProps {
  handleTab: (tab: ITab) => void;
  addTodoToggle: () => void;
}
