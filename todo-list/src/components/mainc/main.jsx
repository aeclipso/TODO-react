import React from "react"
import style from "./main.module.css"
import Header from "./header/header"
import Content from "./content/content"
import Footer from "./footer/footer"
import Tasks from "./content/tasks/tasks";

const Main = (props) => {

    return(
        <div className={style.main}>
            <Header />
            <Content tasksProps={props.taskProps}/>
            <Footer />
        </div>
    )
}

export default Main;