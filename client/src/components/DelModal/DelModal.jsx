import './DelModal.scss'
import Close from '../../assets/icon/close-24px.svg'

const DelModal = props => {

  if(!props.show){
    return null
  }

  return (
    <div className="modal-del">
      <div  className="modal-del-content">
      <img  className="modal-del__close" src = {Close} alt = "x mark to close" onClick = {props.onCloseHandler}
/>

        <div className="modal-del-header">
          <h4 className="modal-del__title">
            Delete {props.itemName} {props.name} Item?
          </h4>
          <div className="modal-del__content">
          Please confirm that you’d like to delete Television from the inventory list.
          You won’t be able to undo this action.
          </div>
          <div className="modal-del-footer">
            <button className="modal-del-footer__cancel" onClick = {props.onCloseHandler}>Cancel</button>
            <button className="modal-del-footer__delete" onClick = {() => props.onDeleteHandler(props.itemId)}>Delete</button>

          </div>
        </div>
      </div>
    </div>
  )
}
export default DelModal