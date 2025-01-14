import React, { useState, useEffect } from 'react';
import cursosData from '../cursos.json'; // Suponiendo que los cursos están en esta ruta
import '../Categorias.css';

const CatEspecificas = () => {
  const [cursos, setCursos] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    // Obtener el ID de la categoría desde la URL
    const params = new URLSearchParams(window.location.search);
    const categoriaId = parseInt(params.get('categoriaId'));

    // Filtrar los cursos por categoría
    const cursosFiltrados = cursosData.Cursos.filter(curso => curso.categoriaId === categoriaId);
    setCursos(cursosFiltrados);

    // También podemos obtener el nombre de la categoría para mostrarlo
    const categoriaSeleccionada = categoriasData.Categorias.find(categoria => categoria.id === categoriaId);
    if (categoriaSeleccionada) {
      setCategoria(categoriaSeleccionada.nombre);
    }
  }, []);

  return (
    <div className="categorias-container">
      <h1 className="categorias-title">{categoria} - Cursos Específicos</h1>
      <div className="categorias-gallery">
        {cursos.map((curso) => (
          <div key={curso.id} className="categoria-card">
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
        ))}
      </div>
    </div>
  );
};

export default CatEspecificas;
