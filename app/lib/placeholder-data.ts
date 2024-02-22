import {FormDefinition} from "@/app/lib/definitions";

export const formContents: FormDefinition[] = [
    {
        id: 1,
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Enter your first name',
        defaultValue: '',
        rules: {
            required: true,
        }
    },
    {
        id: 2,
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Enter your last name',
        defaultValue: '',
        rules: {
            required: true,
        }
    },
    {
        id: 3,
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: ['male', 'female'],
        defaultValue: '',
        rules: {
            required: true,
        }
    },
    {
        id: 4,
        name: 'profession',
        label: 'Profession',
        type: 'dropdown',
        options: ['Frontend Developer', 'Backend Developer', 'Devops Engineer'],
        defaultValue: '',
        rules: {
            required: true,
        }
    },
    {
        id: 5,
        name: 'agree',
        type: 'checkbox',
        label: '',
        checkboxLabel: 'I hereby agree to the terms.',
        defaultValue: false,
        rules: {
            required: true,
        }
    }
]