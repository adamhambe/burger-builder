import React from 'react'
import classes from './Layout.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'


const layout = (props) => (
    // I use <></> instead of <Aux></Aux>
    <>
        <Backdrop></Backdrop>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout