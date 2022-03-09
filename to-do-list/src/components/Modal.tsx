import FormToDo from "./FormToDo"
import styles from "./Modal.module.css"
function Modal() {
    return (
        <>
            <div className={styles.fade}></div>
            <div className={styles.modal}>
                <h1>Editar Tarefa</h1>
                <FormToDo btnText="salvar" />
            </div>
        </>
    )
}
export default Modal