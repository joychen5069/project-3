import React, { Component } from 'react';

export default class StateDropdown extends Component {
    constructor() {
        super();
        this.state = {
            states: "",
            statesOptions: [""],
        };
    };

    async stateHandler(event) {
        console.log('THIS IS BEING CLICKED')
        const stateParam = event.target.dataset.name
        await this.props.value(stateParam);
        console.log("state selected", stateParam)
    };


    render() {
        let states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

        let stateOptions = states.map((state, i) => (
            <option value={state} key={i}>
                {state}
            </option>
        ));
        return (
            <>
                <form className="dropdownOptionForm">
                    <label>
                        <select>
                            <option value="">Select a State</option>
                            {stateOptions}
                        </select>
                        <input
                            type="submit"
                            value="See Data"
                            className="stateSubmitBtn"
                            onClick={this.stateHandler}
                        ></input>
                    </label>
                </form>
            </>
        )
    }
}