import React, { useState, useEffect } from 'react';
import styles from './AddGroupSelect.scss'

import Modal from './Modal'

function App({history}: any ) {

    const onClose = () => {
        history.goBack()
    }

    const submit = (e: any) => {
        console.log("swubmit")
    }

    return (
        <div className={styles.container}>
            <Modal closeModal={onClose}>
                <div className={styles.modalcontainer}>
                    <div className={styles.dumy}></div>
                    <div className={styles.card}>
                        <div>
                            Group Add
                            entered invited URL
                        </div>
                        <div>
                        <input className={styles["c-checkbox"]} type="checkbox" id="checkbox1" />
                            <div className={styles["c-formContainer"]}>
                            <form className={styles["c-form"]} action="" >
                                <input className={styles["c-form__input"]} placeholder="invite URL" type="text" required />
                                <label className={styles["c-form__buttonLabel"]} onClick={submit} htmlFor="checkbox1">
                                    <button className={styles["c-form__button"]} type="button">Send</button>
                                </label>
                                <label className={styles["c-form__toggle"]} htmlFor="checkbox1" data-title="Enter Group URL"></label>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            Group Create
                            input new group name
                        </div>
                        <div>
                        <input className={styles["c-checkbox"]} type="checkbox" id="checkbox2" />
                            <div className={styles["c-formContainer"]}>
                            <form className={styles["c-form"]} action="" onSubmit={submit}>
                                <input className={styles["c-form__input"]} placeholder="Group Name" type="text" required />
                                <label className={styles["c-form__buttonLabel"]} onClick={submit}  htmlFor="checkbox2">
                                    <button className={styles["c-form__button"]} type="button">Send</button>
                                </label>
                                <label className={styles["c-form__toggle"]} htmlFor="checkbox2" data-title="Enter New Group Name"></label>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
  }
  
export default App;