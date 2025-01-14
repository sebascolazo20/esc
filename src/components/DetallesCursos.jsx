import React, { useState, useEffect } from 'react';
import categoriasData from '../Categorias.json';
import cursosData from '../cursos.json';
import detallesCursosData from '../detalles_cursos.json';
import Footer from './Footer';
import './DetallesCurso.css';

const DetallesCurso = () => {
  const [curso, setCurso] = useState(null);
  const [categoria, setCategoria] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cursoId = parseInt(params.get('cursoId'));

    if (cursoId) {
      // Buscar el curso por su id en cursos.json
      const cursoEncontrado = cursosData.find(curso => curso.id === cursoId);
      if (cursoEncontrado) {
        // Buscar la categoría del curso
        const categoriaEncontrada = categoriasData.find(categoria => categoria.id === cursoEncontrado.categoriaId);
        // Buscar los detalles del curso en detalles_cursos.json
        const detallesCurso = detallesCursosData.find(detalles => detalles.id === cursoId);

        setCurso({ ...cursoEncontrado, ...detallesCurso });
        setCategoria(categoriaEncontrada);
      }
    }
  }, []);

  if (!curso) {
    return <p>Curso no encontrado.</p>;
  }

  return (
    <div className="curso-detalles-container">
      <div className="curso-details">
        <div className="curso-image">
          <img src={`/assets/${curso.imagen}`} alt={curso.nombre} />
        </div>
        <div className="curso-info">
          <h1>{`CURSO DE ${curso.nombre}`}</h1>
          <div className="curso-info-item">
            <strong>Duración:</strong> ${curso.duracion}
          </div>
          <div className="curso-info-item">
            <strong>Carga horaria:</strong> {`${curso.cargaHoraria}`}
          </div>
          <div className="curso-info-item">
            <strong>Días y horarios:</strong>${curso.diasHorarios}
          </div>
          <div className="curso-info-item">
            <strong>Inicio y lugar:</strong>{`${curso.lugar}`}
          </div>
        </div>
      </div>
      <div className="curso-descripcion">
        <h2>Sobre el curso:</h2>
        <p>{curso.descripcion}</p>
      </div>
      <div className="curso-logros">
        <h2>Al finalizar:</h2>
        <ul>
          {curso.alFinalizar.map((logro, index) => (
            <li key={index}>{logro}</li>
          ))}
        </ul>
      </div>
      <div className="curso-requisitos">
        <h2>Requisitos:</h2>
        <ul>
          {curso.requisitos.map((requisito, index) => (
            <li key={index}>{requisito}</li>
          ))}
        </ul>
      </div>
      <button className="inscribirse-btn">Inscribirse</button>
      <Footer />
    </div>
  );
};

export default DetallesCurso;
