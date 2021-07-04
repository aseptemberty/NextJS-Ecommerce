import React from "react"
import styles from '../../styles/components/ui/Inputs.module.scss'

export function RadioButton() {
	return(
		<div id={styles.radiobutton}>
			<input type="radio" name="radio" />
			<span className={styles.checkmark}/>
		</div>
	)
}

export function Checkbox() {
	return(
		<div id={styles.checkbox}>
			<input type="checkbox" />
			<span className={styles.checkmark}/>
		</div>
	)
}

export function TextInput({center=false, label='', placeholder=''}){
	return(
		<div id={styles.textInput}>
			<label className={`${center? styles.center: styles.top}`}>{label}</label>
			<input type='text'  placeholder={placeholder}/>
		</div>
	)
}