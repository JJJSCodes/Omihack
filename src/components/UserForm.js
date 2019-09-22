import React, {Component} from 'react'
import FormUserDetails from './FormUserDetails'

// Link for Form: https://www.youtube.com/watch?v=zT62eVxShsY&t=1922s  27:12

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            steps: step + 1
        });
    }

    //Go back to the previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            steps: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};
        switch(step) {
            case 1:
                return(
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
            case 2:
                return <h1>FormPersonalDetails</h1>;
            case 3:
                return <h1>Confirm</h1>;
            case 4:
                return <h1>Success</h1>;
        }
    }
}

export default UserForm;