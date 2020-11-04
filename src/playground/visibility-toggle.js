class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeVisibility = this.onChangeVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    onChangeVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onChangeVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Details</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));