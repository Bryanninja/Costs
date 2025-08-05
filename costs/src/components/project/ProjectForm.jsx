import Input from '../form/input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import './ProjectForm.css'

function ProjectForm({textBtn}) {
    return (
        <form className='form'>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto" />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total" />

            <Select
                name="category_id"
                text="Selecione a categoria"/>    
                
            <SubmitButton text={textBtn}/>
        </form>
    )
}

export default ProjectForm;