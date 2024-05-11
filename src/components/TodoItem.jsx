function TodoItem() {
  let todoName = "milk shake";
  let todoDate = "04/12/23";

  return (
    <>
      <div className="container">
        <div className="row k-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default TodoItem;
