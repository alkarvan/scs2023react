import {useForm} from "react-hook-form";
import {commentsService} from "../../services/commentsService";

const CommentForm = ({setComments}) => {
    const {reset,register, handleSubmit} = useForm()
    const save = (item) =>{
        commentsService.create(item).then(({data})=> setComments(prev => ([...prev, data])))
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'postId'} {...register('postId')}/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export {CommentForm};