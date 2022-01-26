function App(){
    const [todos, setTodos] = React.useState([
        {
            text: "wake up",
            isCompleted: false,
        },
        {
            text: "eat",
            isCompleted: false,
        },
        {
            text: "be awesome",
            isCompleted: false,
        },
    ]);
    return (<>
    {todos.map((todo,i) => <div key={i}>{todo.text}</div>)}
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)