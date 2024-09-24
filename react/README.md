# React + TypeScript + Vite

# React Task Management Application

## Descripción

El objetivo de esta prueba técnica es construir una aplicación de **Gestión de Tareas** usando React. La aplicación permitirá agregar, editar, eliminar y marcar tareas como completadas o pendientes. También se debe implementar la persistencia de datos utilizando `localStorage` para mantener la información entre recargas de página.

## Requisitos

### Funcionalidad:

1. **Lista de Tareas**:
   - Visualizar una lista de tareas con título, descripción opcional y estado (completada o pendiente).
   - Mostrar las tareas completadas con un estilo diferente.

2. **Agregar Tarea**:
   - Formulario para agregar una nueva tarea con título y estado (completada o pendiente).

3. **Editar Tarea**:
   - Permitir la edición del título y descripción de una tarea existente.

4. **Eliminar Tarea**:
   - Opción para eliminar una tarea de la lista.

5. **Cambiar Estado de la Tarea**:
   - Permitir marcar una tarea como completada o pendiente directamente desde la lista.

6. **Filtros**:
   - Filtros para mostrar solo las tareas completadas, pendientes o todas.

7. **Persistencia de Datos**:
   - Las tareas deben persistir a través de recargas de página utilizando `localStorage`.

8. **Estilos**:
   - La aplicación debe ser responsiva y estar estilizada con CSS, `styled-components` o cualquier otra librería de estilos.

### Extras (Opcionales):
- Implementar pruebas unitarias utilizando Jest o React Testing Library.
- Uso de TypeScript.
- Añadir animaciones o transiciones en la UI.

## Requisitos Técnicos

- **React** con hooks (`useState`, `useEffect`, etc.).
- Se permite el uso de Redux o Context API para manejar el estado global, si se considera necesario.
- **No** se permite el uso de `create-react-app` o cualquier otro generador de boilerplate. La configuración debe hacerse manualmente con Webpack o Vite.
- Se pueden usar bibliotecas de estilos como Material-UI, Bootstrap, o crear estilos personalizados.

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone <URL-del-repositorio>
cd <nombre-del-directorio>
