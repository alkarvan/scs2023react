import {useForm} from "react-hook-form";

const UserForm = () => {
    const {reset, register, handleSubmit} = useForm()

    const save = (user) =>{

    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'id'} {...register('id')}/>
        </form>
    );
};

export {UserForm};