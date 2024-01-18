import { useState } from "react";

export function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;
    props.onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">待辦清單練習專案</label>
          <input 
            value={newItem} // necessary?
            placeholder="請在此輸入事項"
            onChange={e=>setNewItem(e.target.value)} 
            type="text" 
            id="item" />
        </div>
        <button className="btn">新增</button>
      </form>
  );
}