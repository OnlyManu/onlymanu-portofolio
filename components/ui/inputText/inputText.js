import styles from './input.module.css'
import utils from '../../../styles/utils.module.css'

export default function InputText({ name, type, additionnalClass, value, error, onChange }) {
    additionnalClass = additionnalClass ? additionnalClass : ""
    return (
        <div className={error.status ? utils.inputGroup + " " + additionnalClass + " " + utils.inputGroupError : utils.inputGroup + " " + additionnalClass}>
            <label htmlFor={name} className={utils.inputLabel}>{name.length > 1 ? name[0].toUpperCase()+name.substring(1) : name}</label>
            <input type={type} aria-label={name} className={styles.input} name={name} value={value} onChange={onChange} />
            {error.status &&
                <span className={utils.inputError}>
                    {error.message}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={utils.errorIcon}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                </span>
            }
        </div>
    )
}