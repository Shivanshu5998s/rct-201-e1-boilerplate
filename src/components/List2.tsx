import useNumberList from "./../hooks/useNumberList";

type List2Props = {
  // TODO
  initalValues: any;
  label: string;
};

const List2 = (props: List2Props) => {
  const [list, setList, { pushend, popstart, clear, reset }]: any =
    useNumberList(props.initalValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setList({
      ...props.initalValues,
      [name]: value,
    });
  };

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">
        {/* Label */}
        {props.label}
      </h3>

      {/* Iterate List and wrap the element div below inside */}
      {list.map((el: any, index: any) => {
        return (
          <div key={index} data-testid="list2-element">
            {/* Each element in a list */}
            {el}
          </div>
        );
      })}

      <input data-testid="list2-input" type="number" onChange={handleChange} />

      <button onClick={pushend} data-testid="list2-btn-append-end">
        {/* Button to append new number to the end of the list */}PushEnd
      </button>

      <button onClick={popstart} data-testid="list2-btn-pop-start">
        {/* Button to  pop first element of the list */}PopStart
      </button>

      <button onClick={clear} data-testid="list2-btn-clear">
        {/* Button to  clear the list */}Clear
      </button>

      <button onClick={reset} data-testid="list2-btn-reset">
        {/* Button to  reset the list to initialValue */}Reset
      </button>
    </div>
  );
};

export default List2;