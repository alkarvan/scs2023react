import {Comments} from "../components/CommentsContainer/Comments";
import {Outlet} from "react-router-dom";

import css from './CommentsPage.module.css'

const CommentsPage = () => {
    return (
        <div className={css.comments}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};