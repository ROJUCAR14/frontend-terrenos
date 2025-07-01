import React from 'react';
import Sidebarr from './Sidebar';
import '../Estilizacion/AdminAgregar.css';

const AdminAgregar = () => {
  return (
    <div className="admin-layout">
      <div className="sidebar-container">
        <Sidebarr />
      </div>

      <div className="documentacion-admin">
        <h1>📖 Guía del Panel de Administración de Propiedades</h1>

        <section>
          <h2>🧱 ¿Qué puedes hacer aquí?</h2>
          <p>
            Esta seccion esta diseñada para ayudarte sobre como agregar, editar y eliminar propiedades en caso tengas algun incoveniente. Desde aquí puedes:
          </p>
          <ul>
            <li>➕ Agregar nuevas propiedades al sistema.</li>
            <li>✏️ Editar propiedades existentes.</li>
            <li>🗑️ Eliminar propiedades que ya no se necesiten por X motivo.</li>
          </ul>
        </section>

        <section>
          <h2>🔹 Agregar o Editar Propiedades</h2>
          <p>El formulario tiene campos que deben completarse de manera <strong>OBLIGATORIA</strong> de lo contrario no se podra agregar/editar la propiedad:</p>
          <ul>
            <li><strong>Título:</strong> Aqui se escribe el nombre de la propiedad.</li>
            <li><strong>Estado:</strong> Este campo sirve para ver si el inmueble esta Disponible o Vendido.</li>
            <li><strong>Tipo:</strong> Selecciona el tipo de propiedad los cuales son Terreno, Casa, Departamento, etc.</li>
            <li><strong>Operación:</strong> Seleccione el tipo de operacion disponible para la propiedad Venta, Alquiler, o ambos.</li>
            <li><strong>Precio (S/ y $):</strong> Se ingresa el costo en solcitos y dolares respectivamente.</li>
            <li><strong>Departamento:</strong> Se ingresa el Departamento donde esta ubicado el inmueble Lima, Arequipa, Ica, Junin, etc.</li>
            <li><strong>Distrito:</strong> Se ingresa el Distrito del inmueble.</li>
            <li><strong>Direccion:</strong> Se ingresa la direccion del inmueble. Es importante que sepas que la direccion debe ser correcta y precisas pues en base a esta se podra visualizar un mapa para el cliente.</li>
            <li><strong>Área:</strong> Tamaño del inmueble en metros cuadrados (Para escribir el numero 2 chiquito " m² " manten presionada la tecla "Alt" de tu teclado y luego presiona los numero 2 - 5 - 3 luego suelta la tecla "Alt" y listo).</li>
            <li><strong>Descripción:</strong> Aqui puedes escribir toda la informacion extra que desees sin limite.</li>
            <li><strong>Imágenes:</strong> Elige los archivos para subir desde tu computadora, laptop, telefono, etc. Tienes que saber que la <strong>PRIMERA IMAGEN</strong> que selecciones sera la que salga como portada por lo que de preferencia escoge la mas bonita :D</li>
          </ul>
          <p>
            Luego haz clic en el botón <strong>"Agregar Propiedad"</strong> o <strong>"Guardar"</strong> si estás editando.
          </p>
        </section>

        <section>
          <h2>🔹 Lista de Propiedades</h2>
          <p>En la tabla puedes ver todas las propiedades registradas.</p>
          <ul>
            <li><strong>✏️ Editar:</strong> Abre el formulario con la información de dicha propiedad para modificarla.</li>
            <li><strong>🗑️ Eliminar:</strong> Te pedira una confirmacion para <strong>ELIMINAR</strong> la propiedad del sistema.</li>
            <li><strong>💾 Guardar:</strong> Guarda los cambios hechos.</li>
            <li><strong>❌ Cancelar:</strong> Cierra la edición sin aplicar cambios.</li>
          </ul>
        </section>

        <section>
          <h2>🔹 Navegación por páginas</h2>
          <p>Si hay muchas propiedades, verás botones para navegar (Primero-Anterior-1-Siguiente-Ultimo):</p>
          <ul>
            <li><strong>Primero:</strong> Te lleva a la primera página de propiedades.</li>
            <li><strong>Anterior:</strong> Te mueve 1 pagina atras.</li>
            <li><strong>Numeros:</strong> Te desplaza en base al numero que hayas dado clic.</li>
            <li><strong>Siguiente:</strong> Te mueve 1 pagina delante.</li>
            <li><strong>Último:</strong> Te lleva a ver las propiedades más recientes.</li>
          </ul>
        </section>

        <section>
          <h2>🔹 Cerrar Sesion</h2>
          <p>Cuando termines de agregar o administrar tus propiedades, recuerda cerrar tu sesion dando clic en el boton correspondiente:</p>
        </section>

        <section>
          <h2>❓ ¿Tienes problemas?</h2>
          <ul>
            <li>✔️ Verifica que todos los campos estén llenos, en caso no tengas informacion sobre un campo por ejemplo no tienes la direccion no lo dejes vacio escribe "Sin Informacion" los campos se deben llenar de manera <strong>OBLIGATORIA</strong> para que se pueda agregar/modificar una propiedad.</li>
            <li>✔️ Revisa tu conexión a internet.</li>
            <li>❌ Si aparece un error desconocido o hay algo que no se explica del todo bien en esta documentacion comunicate para ayudarte.</li>
          </ul>
        </section>

        <footer style={{ marginTop: '40px', fontSize: '0.9rem', color: '#666' }}>
          <p>Versión de documentación: Julio 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminAgregar;
