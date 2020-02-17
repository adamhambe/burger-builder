import React from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'


const layout = (props) => (
    // I use <></> instead of <Aux></Aux>
    <>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout