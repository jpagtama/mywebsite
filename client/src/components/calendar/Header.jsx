import React from 'react'

const Header = (props) => {
    const styles = props.classes
    return (
        <div className={styles.header} ><h1>react-event-viewer-calendar</h1></div>
    )
}

export default Header