'use client';

import {useForm, Controller, FieldValues, FieldPath, ControllerProps, Field} from "react-hook-form";
import {TextBoxComponent, TextBoxModel} from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
    CheckBoxComponent,
    RadioButtonComponent,
    ButtonComponent,
} from "@syncfusion/ej2-react-buttons";
import React from "react";
import {RadioButtonModel} from "@syncfusion/ej2-buttons/src/radio-button/radio-button-model";
import {DropDownListModel} from "@syncfusion/ej2-dropdowns/src/drop-down-list/drop-down-list-model";
import {CheckBoxModel} from "@syncfusion/ej2-buttons/src/check-box/check-box-model";
import {formContents} from "@/app/lib/placeholder-data";

// Error Component
function Error({children}: { children: React.ReactNode }) {
    return (
        <p style={{color: "red"}}>
            {children}
        </p>
    )
}

type Props<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
> = {
    value: any,
    type: string,
    onChange: (e: any) => void,
    options?: string[],
    checkboxLabel?: string
} & ControllerProps<TFieldValues, TName>
& Partial<TextBoxModel>
& Partial<RadioButtonModel>
& Partial<DropDownListModel>
& Partial<CheckBoxModel>

function Input<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
>(props: Props<TFieldValues, TName>) {
    const { value, type, onChange, options, checkboxLabel, ...rest} = props;

    switch (type) {
        case "text":
            return (
                <TextBoxComponent
                    placeholder={rest?.placeholder}
                    change={ value => onChange(value)}
                    value={value}
                />
            );
        case "radio":
            return options?.map((e) => (
                <RadioButtonComponent
                    key={e}
                    label={e}
                    value={e}
                    onChange={(value: any) => onChange(value)}
                    checked={value === e}
                />
            ));
        case "dropdown":
            return (
                <DropDownListComponent
                    dataSource={ options }
                    select={ itemData => {
                        onChange(itemData.value);
                    }}
                    value={value}
                />
            );

        case "checkbox":
            return (
                <CheckBoxComponent
                    label={ checkboxLabel }
                    onChange={(e: { target: { checked: boolean } }) => onChange(e.target.checked)}
                    checked={value}
                />
            );

        default:
            return null;
    }
}

export default function DynamicForm() {
    const {
        handleSubmit,
        control,
        // watch,
        formState: { errors },
    } = useForm();

    const formInputs = formContents.map((e) => {
        const { rules, defaultValue, label } = e;

        return (
            <section key={e.id}>
                <label>{label}</label>
                <Controller
                    name={e.name}
                    control={control}
                    rules={rules}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <div>
                            <Input
                                value={field.value}
                                onChange={field.onChange}
                                {...e}
                            />
                        </div>
                    )}
                />
                {errors[e.id] && <Error>This field is required</Error>}
            </section>
        );
    });

    const onSubmit = (data: FieldValues) => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it

    return (<>
        <br/><br/><br/>

        {/*"handleSubmit" will validate your inputs before invoking "onSubmit"*/}
        <div className="wrapper">
            <h1>Dynamic Form Example</h1>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                {formInputs}
                <div style={{ textAlign: "center" }}>
                    <ButtonComponent type="submit" cssClass="e-success">
                        Success
                    </ButtonComponent>
                </div>
            </form>
        </div>
    </>)
}