import React from "react"
import style from "./main.module.css"
import Header from "./header/header"
import Content from "./content/content"
import Footer from "./footer/footer"

const Main = (props) => {

    return(
        <div className={style.main}>
            <Header />
            <Content tasksProps={props.taskProps}
                    addTask={props.addTask}/>
            <Footer />
        </div>
    )
}

export default Main;