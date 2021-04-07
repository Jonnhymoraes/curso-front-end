import Api from '../service/Api'
import { useForm } from 'react-hook-form';

export default function Forms (props) {
    const {register, handleSubmit, setValue} = useForm();

    const onSubmit = data => {
        Api(data);
        setValue('userId','');
        setValue('title','');
        setValue('body','');
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Usuário</h2> 
            <div>          
                <input name="userId" ref={register} placeholder = "Nome do Usuário"/>
            </div>
            <h2>Título</h2>    
            <div>      
                <input name="title" ref={register} placeholder = "Título"/>
            </div>
            <h2>Descrição</h2>
            <div>
                <input name="body" ref={register} placeholder = "Descrição"/>
            </div>
            
            <input type="submit" />
        </form>
    )

}