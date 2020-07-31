class App extends React.Component {
    render(){
        return(
            <div>
                <Hello to="Kuchiku" from="Babe"/>
                <Hello to="Elphy" from="Piggy"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));