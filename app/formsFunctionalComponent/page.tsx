'use client';
import { useState, useEffect, useRef, useReducer, SetStateAction} from 'react';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import {FormValidator} from '@syncfusion/ej2-inputs';
import {TextBoxComponent} from '@syncfusion/ej2-react-inputs';
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';

let formObject: FormValidator;

export default function FunctionalComponentForm() {

    const userNameRef = useRef(null);
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>();
    const initialState = {email: '', password: ''};
    const reducer = (state: any, action: { type: any; field: any; value: any; }) => {
        switch (action.type) {
            case 'update':
                return {...state, [action.field]: action.value};

            default:
                return initialState;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const dateChangeHandler = (event: { value: SetStateAction<Date | undefined>; }) => {
        setDateOfBirth(event.value);
    };

    const update = (field: string) => (event: { value: any; }) => {
        //update action is dispatched to update the email and password state value
        dispatch({ type: 'update', field, value: event.value });
    };

    useEffect(() => {
        userNameRef.current.focusIn();
        const options = {
            // validation rules
            rules: {
                email: {
                    required: [true, '* Please enter your email'],
                },
                password: {
                    required: [true, '* Please enter your password'],
                },
                date: {
                    required: [true, '* Please enter your date of birth'],
                },
            },
        };
        // Initialize the form validator
        formObject = new FormValidator('#form1', options);
    }, []);

    const onSubmit = () => {
        formObject.validate();
        if (formObject.validate()) {
            console.log('SyncFusion FormValidator', (formObject as any).element[0].value.toString());
            (formObject as any).element.reset();
        }
    };

    return (<>
        <br/><br/><br/>

        <div>
            <div className="control_wrapper" id="control_wrapper">
                <h3 className="form-title">User Login</h3>
                <div className="control_wrapper textbox-form">
                    <form id="form1" method="post">
                        <div className="form-group">
                            <TextBoxComponent
                                ref={userNameRef}
                                type="email"
                                name="email"
                                value={state.email}
                                change={update('email')}
                                placeholder="Username"
                                floatLabelType="Auto"
                                data-msg-containerid="errroForEmail"
                            />
                            <div id="errroForEmail"/>
                        </div>
                        <div className="form-group">
                            <TextBoxComponent
                                type="password"
                                name="password"
                                value={state.password}
                                change={update('password')}
                                placeholder="Password"
                                floatLabelType="Auto"
                                data-msg-containerid="errroForPassword"
                            />
                            <div id="errroForPassword"/>
                        </div>
                        <div className="form-group">
                            <DatePickerComponent
                                name="date"
                                value={dateOfBirth}
                                change={dateChangeHandler}
                                placeholder="Date of Birth"
                                floatLabelType="Auto"
                                data-msg-containerid="errroForDateOfBirth"
                            />
                            <div id="errroForDateOfBirth"/>
                        </div>
                    </form>
                    <div className="submitBtn">
                        <ButtonComponent onClick={onSubmit}>Submit</ButtonComponent>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        </div>
    </>)
}