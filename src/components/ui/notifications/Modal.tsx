import ConfirmCityModal from "./ConfirmCityModal"
import { TYPES } from "../../../../types/constants"
import { connect } from "react-redux"
import { showModal } from "../../../utils/redux/actions/modalActions"
import ChooseCityModal from "./ChooseCityModal"
import SendReviewModal from "./modals/sendReview/SendReviewModal";


function Modal({ modal, showModal, context}) {
	const close = ()=>showModal(TYPES.MODAL.CLOSE)
	let child
	switch (modal) {
		case TYPES.MODAL.ConfirmCity:
			child = <ConfirmCityModal close={close}/>
			break
		case TYPES.MODAL.ChooseCity:
			child = <ChooseCityModal close={close}/>
			break
    case TYPES.MODAL.SENDREVIEW:
      child = <SendReviewModal close={close} context={context}/>
      break
		case TYPES.MODAL.CLOSE:
			child = <></>
			break
		default:
			throw 'Modal without content';
	}
	return (modal!='close')? child : null


}

const mapStateToProps = state => ({
	modal: state.modal.modal,
  context: state.modal.context
});

const mapDispatchToProps = {
	showModal: showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);


