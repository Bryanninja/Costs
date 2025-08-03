import './Home.css'
import savings from '../../assets/img/savings.svg'
import LinkButton from '../layout/LinkButton';

function Home(){
    return(
        <section className='home_container'>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto"/>
            <img src={savings} alt="Costs"/>
        </section>
    )
}

export default Home;