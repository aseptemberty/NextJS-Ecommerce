import React  from "react"
import { Search } from "../Search"
import { setCity } from "../../../utils/redux/actions/cityActions"
import { connect } from "react-redux"
import styles  from '../../../styles/components/ui/notifications/chooseCityModal.module.scss'

function ChooseCityModal({close, setCity}){
	const selectCity =(e)=> {
		setCity(e)
		close()
	}

	const cities =["Санкт-Петербург", 'Москва', 'Екатеринбург', 'Тверь']
	return(
		<div className={styles.modal}>
			<div className={styles.header}>
				<h3 className={styles.title}> Выберите город </h3>
				<span className={styles.close} onClick={close}>
          &times;
        </span>
				<div className={styles.body}>
					<Search title='Ваш город' options={cities} onSelect={selectCity}/>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	setCity: setCity
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCityModal);