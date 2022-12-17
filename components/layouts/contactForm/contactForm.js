import { useState, useRef } from 'react'
import sendMail from '../../../lib/mailer'

import InputText from '../../ui/inputText/inputText'
import InputTextArea from '../../ui/inputTextArea/inputTextArea'
import AlertBox from '../../ui/alertBox/alertBox'

import styles from './contact.module.css'
import utils from '../../../styles/utils.module.css'


const fields = [
    {field:"text", name: "name", type:"text"},
    { field: "text", name: "email", type: "email"},
    {field:"textarea", name: "message"}
]

const generateFormData = () => {
    let fieldsValues = {}
    fields.forEach(field => {
        fieldsValues[field.name] = ""
    })
    return fieldsValues;
}

const generateErrorStatus = () => {    
    let fieldsErrorStatus = {}
    fields.forEach(field => {
        fieldsErrorStatus[field.name] = {status: false, message: ""}
    })
    return fieldsErrorStatus
}

const initialDataState = { values: generateFormData() }
const initialErrorState = generateErrorStatus()

export default function ContactForm() {
    const [formData, setFormData] = useState(initialDataState)
    const [errors, setError] = useState(initialErrorState)
    const [alertState, setAlertState] = useState(false)

    const { values, isLoading } = formData
    
    const setInputError = (input, status, message) => {
        setError(errors => ({
            ...errors,
            [input]: { status: status, message: message }
        }))
    }
    const openCloseAlert = () => {
        setAlertState(alertState => !alertState)
    } 

    const handleChange = ({target}) => {
        setFormData((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name] : target.value
            },
        }))
        setInputError(target.name, false, '')
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setFormData((prev) => ({
            ...prev,
            isLoading: true
        }))

        if (verifyFormData()) {
            const response = await sendMail(values)
            if (response === 'success') {
                resetFormData()
                openCloseAlert()                
            }   
        }

        setFormData((prev) => ({
            ...prev,
            isLoading: false
        }))
    }

    const verifyFormData = () => {
        const inputs = Object.keys(values)
        let isError = false

        inputs.forEach(input => {
            if (input === 'email') {
                if (values[input]) {
                    /^.+@.+\..{2,4}$/.test(values[input]) ? setInputError(input, false, '') : (setInputError(input, true, 'enter a correct email adress'), isError = true)
                } else {
                    setInputError(input, true, 'this field is required')
                    isError = true
                }
            } else {
                values[input] ? setInputError(input, false, '') : (setInputError(input, true, 'this field is required'), isError = true)
            }
        })
        return !isError
    }

    const resetFormData = () => {
        const resetValues = generateFormData()
        setFormData((prev) => ({
            ...prev,
            values: resetValues
        }))
    }

    return (
        <form method='POST' className={styles.contact + " " + utils.bgColorLight} onSubmit={handleSubmit} data-aos="flip-down">
            {fields.map((field, key) => {
                if (field.field === "textarea") {
                    return <InputTextArea key={key} name={field.name} value={values[field.name]} error={errors[field.name]} onChange={handleChange} />
                }
                return <InputText key={key} name={field.name} type={field.type} value={values[field.name]} error={errors[field.name]} onChange={handleChange} />
            })}

            <button className={isLoading ? styles.submitButton + " " + utils.bgColorBlue + " " + styles.loading : styles.submitButton + " " + utils.bgColorBlue}>
                <div className={styles.buttonSpinner}></div>
                <span className={styles.buttonText}>Send message</span>
            </button>
            <AlertBox isOpen={alertState} onClick={openCloseAlert}>the message was send with success</AlertBox>
        </form>
    )
}