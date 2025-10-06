# 🛍️ Saverio Ropa · E-commerce (Entrega 1 · React)

Proyecto desarrollado como **primera entrega del curso de React (Coderhouse)**.  
En esta etapa se construye la **base del e-commerce**, creando la estructura inicial y los primeros componentes reutilizables.

---

## 🚀 Objetivo de la entrega

> Comprender los conceptos básicos de React y su estructura de componentes,  
> creando la base para la homepage del e-commerce.

---

## 🧩 Componentes desarrollados

### 🔹 NavBar.jsx
- Contiene el logo de la tienda, los enlaces de navegación y el componente **CartWidget**.
- Se renderiza desde `App.jsx`.

### 🔹 CartWidget.jsx
- Representa el ícono del carrito de compras (🛒).
- Se renderiza dentro de `NavBar`.

### 🔹 ItemListContainer.jsx
- Recibe una **prop “greeting”** y muestra un mensaje de bienvenida al usuario.
- Simula el futuro contenedor del listado de productos.

---

## 🏗️ Estructura del proyecto
src/
├── components/
│ ├── NavBar.jsx
│ ├── CartWidget.jsx
│ └── ItemListContainer.jsx
├── App.jsx
├── main.jsx
└── index.css

---

## 🧠 Tecnologías utilizadas

- **React + Vite** (estructura inicial)
- **JavaScript (ES6+)**
- **CSS puro** (estilos globales y componentes)
- **Node.js / npm** para gestión del entorno

---

## 💅 Diseño actual

- Barra de navegación moderna, responsive, con estilo oscuro.
- Logo textual: **Saverio Ropa**
- Efectos *hover* y tipografía limpia.
- Mensaje centrado con saludo personalizado.

---

## ⚙️ Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/mi-tienda.git

# Entrar en el proyecto
cd mi-tienda

# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev

