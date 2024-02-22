'use client';

import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
    CheckBoxComponent,
    RadioButtonComponent,
    ButtonComponent,
} from "@syncfusion/ej2-react-buttons";
import {useForm, Controller, FieldValues} from "react-hook-form";
import React from "react";

// Error Component
function Error({children}: { children: React.ReactNode }) {
    return (
        <p style={{color: "red"}}>
            {children}
        </p>
    )
}

export default function NormalHookForm() {

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm();

    function onSubmit(data: FieldValues) {
        console.log('react-hook-form onSubmit', data);
    }

    return (<>
        <br/><br/><br/>

        {/*"handleSubmit" will validate your inputs before invoking "onSubmit"*/}
        <div className="wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label>First Name</label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{required: true}}
                        defaultValue=""
                        render={({field}) => (
                            <TextBoxComponent
                                placeholder="Enter your First Name"
                                // floatLabelType="Auto"
                                change={value => field.onChange(value)}
                                value={field.value}
                            />
                        )}
                    />
                    {errors.firstName && <Error>This field is required</Error>}
                </section>
                <section>
                    <label>Last Name</label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Controller
                        name="lastName"
                        control={control}
                        rules={{required: true}}
                        defaultValue=""
                        render={({field}) => (
                            <TextBoxComponent
                                placeholder="Enter your Last Name"
                                // floatLabelType="Auto"
                                change={value => field.onChange(value)}
                                value={field.value}
                            />
                        )}
                    />
                    {errors.lastName && <Error>This field is required</Error>}
                </section>
                <section>
                    <label>Gender</label>
                    {/* include validation with required or other standard HTML validation rules */}

                    <Controller
                        name="gender"
                        control={control}
                        rules={{required: true}}
                        defaultValue="female"
                        render={({field}) => (
                            <div>
                                <br/>
                                <RadioButtonComponent
                                    label="Male"
                                    value="male"
                                    onChange={(value: boolean) => field.onChange(value)}
                                    checked={field.value === "male"}
                                />

                                <RadioButtonComponent
                                    label="Female"
                                    value="female"
                                    onChange={(value: boolean) => field.onChange(value)}
                                    checked={field.value === "female"}
                                />
                            </div>
                        )}
                    />

                    {errors.gender && <Error>This field is required</Error>}
                </section>
                <section>
                    <label>Profession</label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Controller
                        name="profession"
                        control={control}
                        rules={{required: true}}
                        defaultValue=""
                        render={({field}) => (
                            <DropDownListComponent
                                dataSource={[
                                    "Frontend Developer",
                                    "Backend Developer",
                                    "Devops Engineer",
                                ]}
                                select={itemData => {
                                    field.onChange(itemData.value);
                                }}
                                value={field.value}
                            />
                        )}
                    />
                    {errors.profession && <Error>This field is required</Error>}
                </section>

                <section>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Controller
                        name="agree"
                        control={control}
                        rules={{required: true}}
                        defaultValue={false}
                        render={({field}) => (
                            <CheckBoxComponent
                                label="I hereby agree to the terms."
                                onChange={(e: { target: { checked: boolean } }) => field.onChange(e.target.checked)}
                                checked={field.value}
                                cssClass='e-checkbox-yasen'
                            />
                        )}
                    />
                    {errors.agree && <Error>This field is required</Error>}
                </section>
                <div style={{textAlign: "center"}}>
                    <ButtonComponent type="submit" cssClass="e-success">
                        Success
                    </ButtonComponent>
                </div>
            </form>
        </div>
    </>)
}