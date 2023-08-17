import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [showForm, updateStateForm] = useState(false),
        [colaboradores, updateColaboradores] = useState([
          {
            id: uuid(),
            nombre:"Kevin Aburto",
            puesto: "Desarrollador de Software",
            foto: "https://github.com/KevinAburto97.png",
            equipo: "Programación",
            fav: true
          },
          {
            id: uuid(),
            equipo: "Front End",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harland Lohora",
            puesto: "Instructor",
            fav: false
          },
          {
            id: uuid(),
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
            fav: false
          },
          {
            id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor",
            fav: false
          },
          {
            id: uuid(),
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
            fav: false
          }
        ]),
        [equipos, updateEquipos] = useState([
          {
            id: uuid(),
            titulo:"Programación",
            colorFondo: "#D9F7E9",
            colorDestaque: "#57C278"
          },
          {
            id: uuid(),
            titulo:"Front End",
            colorFondo: "#E8F8FF",
            colorDestaque: "#82CFFA"
          },
          {
            id: uuid(),
            titulo:"Data Science",
            colorFondo: "#F0F8E2",
            colorDestaque: "#A6D157"
          },
          {
            id: uuid(),
            titulo:"DevOps",
            colorFondo: "#FDE7E8",
            colorDestaque: "#E06B69"
          },
          {
            id: uuid(),
            titulo:"UX y Diseño",
            colorFondo: "#FAE9F5",
            colorDestaque: "#DB6EBF"
          },
          {
            id: uuid(),
            titulo:"Móvil",
            colorFondo: "#FFF5D9",
            colorDestaque: "#FFBA05"
          },
          {
            id: uuid(),
            titulo:"Innovación y  Gestión",
            colorFondo: "#FFEEDF",
            colorDestaque: "#FF8A29"
          },
        ])

  const changeStateForm = () => {
    updateStateForm(!showForm)
  }

  const createEquipo = (newEquipo) => {
    updateEquipos([...equipos, {...newEquipo, id: uuid()}])
  }

  const like = (id) => {
    const newColaboradores = colaboradores.map( (colaborador) => {
      if(colaborador.id === id)
        colaborador.fav = !colaborador.fav

      return colaborador
    })

    updateColaboradores(newColaboradores)
  }

  const updateEquipoColor = (color, id) => {
    const equiposUpdated = equipos.map( (equipo) => {
      if(equipo.id === id)
        equipo.colorDestaque = color

      return equipo
    })

    updateEquipos(equiposUpdated)
  }

  //Registrar colaborador
  const addColaborador = (colaborador) => {
    //spread operator
    updateColaboradores( [...colaboradores, colaborador] )
  }

  const deleteColaborador = (id) => {
    const newColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id )
    updateColaboradores(newColaboradores)
  }

  return (
    <div>
      <Header />
      {/*showForm ? <Formulario /> : <></>*/}
      {
        showForm && 
        <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          addColaborador={addColaborador}
          createEquipo={createEquipo}
        />
      }
      <MiOrg changeStateForm={changeStateForm}/>
      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={ colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo) }
          deleteColaborador={deleteColaborador}
          updateEquipoColor={updateEquipoColor}
          like={like}
          /> 
        )
      }

      <Footer />
    </div>
  );
}

export default App;
