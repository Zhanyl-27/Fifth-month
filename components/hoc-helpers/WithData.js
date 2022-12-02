import React, {Component} from "react";

const WithData = (Wrapp) => 
class extends Component {
    state = {
        loading: false,
        errorIndicator: null,
        users: [],
    };

    componentDidMount() {
        this.setState({loading: true});

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if(!response.ok){
                throw new Error("Ai ai chto to plohoe");
            }
            return response.json();
        })
        .then((data) => this.setState({users: data}))
        .catch((err) => this.setState({errorIndicator: err}))
        .finally(() => this.setState({loading: false}));
    }
    render() {
        const {users, loading, errorIndicator} = this.state;

        if(loading) {
            return "Loading...";
        }

        if (errorIndicator) {
            return errorIndicator.message;
        }

        return <Wrapp users={users} {...this.props}/>;
    }
};

export default WithData;

