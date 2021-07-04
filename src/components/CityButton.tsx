import { FaLocationArrow } from "react-icons/fa"
import styles from '../styles/components/headerComponent.module.scss'
import { connect } from "react-redux"
import { showModal } from "../utils/redux/actions/modalActions"
import { TYPES } from "../../types/constants"

function CityButton({city, modal, showModal}){
	if (city == '' && modal == 'close'){
		showModal(TYPES.MODAL.ConfirmCity)
	}
	const cityToShow = city || "Москва"

	return(
		<div
			className={styles.tab}
			onClick={() => showModal(TYPES.MODAL.ChooseCity)}>
			<FaLocationArrow />
			<p>{cityToShow}</p>
		</div>
	)
}

const mapStateToProps = state => ({
	city: state.city.city,
	modal: state.modal.modal
});

const mapDispatchToProps = {
	showModal: showModal,
};


export default connect(mapStateToProps, mapDispatchToProps)(CityButton);
