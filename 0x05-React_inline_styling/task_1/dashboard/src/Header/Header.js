import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css} from 'aphrodite'

export default function Header() {
    return (
        <div className={css(styles.appHeader)}>
            <img src={logo} alt="logo" className={css(styles.appHeaderImg)}/>
            <h1>School dashboard</h1>
        </div>
    )
}

const styles = StyleSheet.create({
    appHeader: {
        display: "flex",
        alignItems: "center",
        borderBottom: "3px solid #e0354b",
        color: "#e0354b",
        fontSize: "1.5rem",
        fontWeight: "bold",
        height: "25%",
    },
    appHeaderImg: {
        width: "200px",
        height: "200px",
    }
})