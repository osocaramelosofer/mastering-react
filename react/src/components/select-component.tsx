import { SelectValues } from "../types";

interface SelectComponentProps {
    handleTodoSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
export function SelectComponent({handleTodoSelect}: SelectComponentProps) {
    return(
        <select name="select-todos" id="select-todos" onChange={(event)=> handleTodoSelect(event)} defaultValue={SelectValues.All}>
        <option value={SelectValues.All}>{SelectValues.All}</option>
        <option value={SelectValues.Done}>{SelectValues.Done}</option>
        <option value={SelectValues.Undone}>{SelectValues.Undone}</option>
      </select>
    )
}