export type FormDefinition = {
    id: number,
    name: string,
    label: string,
    type: string,
    defaultValue: string | boolean,
    rules: { required: boolean },
    placeholder?: string,
    options?: string[],
    checkboxLabel?: string
}