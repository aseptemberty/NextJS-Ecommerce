import { connect } from "react-redux"
import React from "react"
import { showModal } from "../../../utils/redux/actions/modalActions"
import { setCity } from "../../../utils/redux/actions/cityActions"
import { TYPES } from "../../../../types/constants"
import styles from '../../../styles/components/ui/notifications/confirmCityModal.module.scss'

function ConfirmCityModal ({ city, close, setCity, showModal}){
	const clickConfirm = ()=>{
		setCity('Санкт-Петербург')
		close()
	}
	const clickReject = ()=>{
		showModal(TYPES.MODAL.ChooseCity)
	}
	return(
		<div className={styles.modal}>
			<div className={styles.header}>
				<h3 className={styles.title}> {`Ваш город ${city}?`}</h3>
				<span className={styles.close} onClick={clickConfirm}>
          &times;
        </span>
			</div>
			<div className={styles.body}>
				<button onClick={clickConfirm} className={styles.confirm}>
					Да
				</button>
				<button onClick={clickReject} className={styles.reject}>
					Выбрать другой
				</button>
			</div>
		</div>

	)
}
const mapStateToProps = state => ({
	city: state.city.city
});

const mapDispatchToProps = {
	showModal: showModal,
	setCity: setCity
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmCityModal);
