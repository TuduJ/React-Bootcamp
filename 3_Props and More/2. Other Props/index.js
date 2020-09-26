class App extends React.Component {
    render(){
        return(
            <div>
                <Hello 
                    to="Kuchiku"
                    from="Babe"
                    bangs = {3}
                    gif = "https://i.pinimg.com/originals/42/99/78/4299787942726aa1a232a81c8a3f226b.gif"
                />
                <Hello 
                    to="Elphy"
                    from="Piggy"
                    bangs = {6}
                    gif = "https://i.pinimg.com/originals/ce/f5/8b/cef58bd8ebbb59f21e7d8de88b20134e.gif"
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));