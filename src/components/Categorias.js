import React, { useState } from 'react';
import categoriasData from '../Categorias.json';
import cursosData from '../cursos.json';
import '../Categorias.css';
import Footer from './Footer';

const Categorias = () => {
  const [categorias] = useState(categoriasData.Categorias);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const handleClickCategoria = (categoriaId) => {
    if (categoriaId === 8) {
      setCategoriaSeleccionada({ nombre: "Todos" });
      setCursos(cursosData.Cursos);
    } else {
      const categoria = categorias.find((cat) => cat.id === categoriaId);
      setCategoriaSeleccionada(categoria);
      
      const cursosFiltrados = cursosData.Cursos.filter((curso) =>
        Array.isArray(curso.categoriaIds) && curso.categoriaIds.includes(categoriaId)
      );
      setCursos(cursosFiltrados);
    }
  };

  const handleClickCurso = (cursoId) => {
    const curso = cursos.find((curso) => curso.id === cursoId);
    setCursoSeleccionado(curso);
  };

  const handleVolverACursos = () => {
    setCursoSeleccionado(null); // Reseteamos el curso seleccionado
  };

  const handleVolver = () => {
    setCategoriaSeleccionada(null);
    setCursos([]);
    setCursoSeleccionado(null);
  };

  return (
    <div id="root">
      <div className="categorias-container">
        {cursoSeleccionado ? (
          <>
            <button className="volver-btn" onClick={handleVolverACursos}>Volver a Cursos</button>
            <h1 className="categorias-title">{cursoSeleccionado.nombre}</h1>
            <div className="curso-detalles">
              <img src={`/assets/${cursoSeleccionado.imagen}`} alt={cursoSeleccionado.nombre} className="curso-imagen" />
              <div className="curso-info">
                <h2>{cursoSeleccionado.nombre}</h2>
                <p><strong>Duración:</strong> {cursoSeleccionado.duracion}</p>
                <p><strong>Carga horaria:</strong> {cursoSeleccionado.cargaHoraria}</p>
                <p><strong>Días y horarios:</strong> {cursoSeleccionado.diasHorarios}</p>
                <p><strong>Inicio y lugar:</strong> {cursoSeleccionado.inicioLugar}</p>
                <p><strong>Sobre el curso:</strong> {cursoSeleccionado.sobreCurso}</p>
                <ul>
                  <strong>Al finalizar:</strong>
                  {Array.isArray(cursoSeleccionado.logros) && cursoSeleccionado.logros.map((logro, index) => (
                    <li key={index}>{logro}</li>
                  ))}
                </ul>
                <ul>
                  <strong>Requisitos:</strong>
                  {Array.isArray(cursoSeleccionado.requisitos) && cursoSeleccionado.requisitos.map((requisito, index) => (
                    <li key={index}>{requisito}</li>
                  ))}
                </ul>
                <button className="inscribirse-btn">Inscribirse</button>
              </div>
            </div>
          </>
        ) : categoriaSeleccionada ? (
          <>
            <button className="volver-btn" onClick={handleVolver}>Volver a Categorías</button>
            <h1 className="categorias-title">{categoriaSeleccionada.nombre} - Cursos Específicos</h1>
            <div className="categorias-gallery">
              {cursos.length > 0 ? (
                cursos.map((curso) => (
                  <div key={curso.id} className="categoria-card" onClick={() => handleClickCurso(curso.id)}>
                    <img
                      src={`/assets/${curso.imagen}`}
                      alt={curso.nombre}
                      className="categoria-image"
                    />
                    <div className="categoria-overlay">
                      <h2 className="categoria-nombre">{curso.nombre}</h2>
                      <p className="categoria-fecha">Fecha de inicio: {curso.fechaInicio}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay cursos disponibles para esta categoría.</p>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="categorias-title">Categorías</h1>
            <div className="categorias-gallery">
              {categorias.map((categoria) => (
                <div key={categoria.id} className="categoria-card" onClick={() => handleClickCategoria(categoria.id)}>
                  <img
                    src={`/assets/${categoria.imagen}`}
                    alt={categoria.nombre}
                    className="categoria-image"
                  />
                  <div className="categoria-overlay">
                    <h2 className="categoria-nombre">{categoria.nombre}</h2>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Categorias;
