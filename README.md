# EXRESS-CRUD-API

**Español:** Una API REST CRUD de usuarios con autenticación JWT, PostgreSQL, validación de inputs con Joi y rate limiting. Construida con Express.js 5, siguiendo una arquitectura en capas (routes → controllers → models). La base del CRUD fue desarrollada siguiendo [este video](https://www.youtube.com/watch?v=TYB-Lz8YGFk); la autenticación/autorización, el rate limiter y la contenedorización son implementaciones originales.

**English:** A CRUD REST API for users with JWT authentication, PostgreSQL, input validation with Joi and rate limiting. Built with Express.js 5, following a layered architecture (routes → controllers → models). The CRUD base was built following [this video](https://www.youtube.com/watch?v=TYB-Lz8YGFk); authentication/authorization, rate limiting, and containerization are original implementations.

---

## 🏁 Inicio Rápido / Quick Start

**Español:**

1. **Clona el repositorio:** Sigue un tutorial de tu elección, ya sea vía HTTPS, SSH o GitHub CLI.
2. **Para desarrollo local:**
   - Renombra `.env.example` a `.env` y configura tus variables de entorno
   - Asegúrate de tener PostgreSQL corriendo
   - `pnpm install` → `pnpm dev`
3. **Para contenedorizar:**
   - Renombra `.env.example` a `.env` y configura tus variables de entorno
   - `docker compose up -d`

**English:**

1. **Clone repository:** Follow a tutorial of your choice, whether using HTTPS, SSH or GitHub CLI.
2. **For local development:**
   - Rename `.env.example` to `.env` and configure your environment variables
   - Make sure PostgreSQL is running
   - `pnpm install` → `pnpm dev`
3. **For containerization:**
   - Rename `.env.example` to `.env` and configure your environment variables
   - `docker compose up -d`

---

### 🤔 ¿Qué hace esta app? / What this app does?

**Español:**

* CRUD completo de usuarios (crear, leer, actualizar, borrar)
* Autenticación JWT con registro y login de administradores
* Encriptación de passwords con bcrypt
* Validación de inputs con Joi
* Rate limiting global (5 req/30s), restrictivo en login (3 intentos/30s) y creación de admins (1 intento/30s)
* Middleware centralizado de errores
* Seed automático de datos de prueba al iniciar
* Soporte completo para Docker con PostgreSQL

**English:**

* Full CRUD for users (create, read, update, delete)
* JWT authentication with admin registration and login
* Password encryption with bcrypt
* Input validation with Joi
* Global rate limiting (5 req/30s), restrictive login rate limiting (3 attempts/30s), and admin creation rate limiting (1 attempt/30s)
* Centralized error handling middleware
* Automatic seed of test data on startup
* Full Docker support with PostgreSQL

---

## 📁 Archivos del proyecto / Project files

**Español:**

- `src/index.js` — Punto de entrada, configuración de Express y middlewares
- `src/config/db.js` — Conexión al pool de PostgreSQL
- `src/routes/userRoutes.js` — Definición de rutas de la API
- `src/controllers/userController.js` — Handlers de requests (CRUD + auth)
- `src/controllers/inputValidator.js` — Validación de inputs con Joi
- `src/models/userModel.js` — Consultas a la base de datos
- `src/middleware/auth.js` — JWT y bcrypt (generate, verify, encrypt, compare)
- `src/middleware/errorHandler.js` — Manejo centralizado de errores
- `src/middleware/rateLimiter.js` — Rate limiting (general, auth, admin)
- `src/utils/response.js` — Respuesta estandarizada
- `src/data/createUserTable.js` — Creación de tablas y seed de datos
- `Dockerfile` — Configuración de Docker (node:24-alpine)
- `docker-compose.yaml` — Orquestación de app + PostgreSQL
- `.env.example` — Plantilla de variables de entorno
- `API-CRUD-CALLS` — Colección de Postman con ejemplos de llamadas a la API

**English:**

- `src/index.js` — Entry point, Express configuration and middleware setup
- `src/config/db.js` — PostgreSQL connection pool
- `src/routes/userRoutes.js` — API route definitions
- `src/controllers/userController.js` — Request handlers (CRUD + auth)
- `src/controllers/inputValidator.js` — Input validation with Joi
- `src/models/userModel.js` — Database queries
- `src/middleware/auth.js` — JWT and bcrypt (generate, verify, encrypt, compare)
- `src/middleware/errorHandler.js` — Centralized error handling
- `src/middleware/rateLimiter.js` — Rate limiting (general, auth, admin)
- `src/utils/response.js` — Standardized response helper
- `src/data/createUserTable.js` — Table creation and data seeding
- `Dockerfile` — Docker configuration (node:24-alpine)
- `docker-compose.yaml` — App + PostgreSQL orchestration
- `.env.example` — Environment variable template
- `API-CRUD-CALLS` — Postman collection with API call examples

---

## ▶️ Cómo empezar a usarlo / How to start using it

### Opción 1: Localmente / Locally

Necesitas tener PostgreSQL instalado en tu máquina o corriendo en un contenedor Docker **diferente** al que crea el `docker compose` de este proyecto.

> **Nota:** Si ya usas la Opción 2 (Docker), no necesitas instalar nada adicional.

```bash
pnpm install
pnpm dev
```

**Español:**

* Instala las dependencias del proyecto
* Inicia el servidor con nodemon en http://localhost:5001
* Crea las tablas users y admins en PostgreSQL si no existen
* Puebla la tabla users con 3 registros de prueba

**English:**

You need PostgreSQL installed on your machine or running in a Docker container **different** from the one created by this project's `docker compose`.

> **Note:** If you already use Option 2 (Docker), you don't need to install anything additional.

* Installs project dependencies
* Starts the server with nodemon at http://localhost:5001
* Creates the users and admins tables in PostgreSQL if they don't exist
* Seeds the users table with 3 test records

---

### Opción 2: Docker / Option 2: Docker

```bash
docker compose up -d
```

**Español:**

* No necesitas tener PostgreSQL instalado en tu máquina, el `docker compose` crea un contenedor de DB
* PostgreSQL espera a estar listo antes de arrancar la app (healthcheck)
* Los datos se persisten en un volumen Docker
* Si ya tienes un contenedor de PostgreSQL corriendo por separado, asegúrate de que los puertos no choquen (por defecto usa el 5432)

**English:**

* You don't need PostgreSQL installed on your machine; `docker compose` creates a DB container
* PostgreSQL waits until it's ready before starting the app (healthcheck)
* Data is persisted in a Docker volume
* If you already have a separate PostgreSQL container running, make sure the ports don't conflict (default is 5432)

---

## 📦 ¿Qué necesitas? / What you need?

**Español:**

* Node.js 24+ (para uso local)
* pnpm (para gestión de dependencias)
* PostgreSQL (para uso local, Docker lo levanta automáticamente)
* Docker + Docker Compose (opcional, para contenedorización)
* Una herramienta para hacer llamadas HTTP (Postman u otro de tu elección)

**English:**

* Node.js 24+ (for local use)
* pnpm (for dependency management)
* PostgreSQL (for local use, Docker starts it automatically)
* Docker + Docker Compose (optional, for containerization)
* A tool to make HTTP requests (Postman or other of your choice)

---

## 📡 Endpoints / API Routes

**Español:** La API tiene 2 rutas públicas, 3 rutas protegidas y 2 rutas de autenticación.

**English:** The API has 2 public routes, 3 protected routes, and 2 authentication routes.

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/` | Test de conexión a la DB | No |
| GET | `/api/user` | Lista todos los usuarios | No |
| GET | `/api/user/:id` | Obtener usuario por ID | No |
| POST | `/api/user` | Crear usuario | Sí (JWT) |
| PUT | `/api/user/:id` | Actualizar usuario | Sí (JWT) |
| DELETE | `/api/user/:id` | Borrar usuario | Sí (JWT) |
| POST | `/api/admin` | Registrar administrador | No |
| POST | `/api/admin/login` | Login de administrador | No |

### Ejemplos / Examples

**Español:**

```
GET  /api/user                       → Todos los usuarios
GET  /api/user/1                     → Usuario con ID 1
POST /api/admin                      → Body: { "name": "root", "password": "1234" }
POST /api/admin/login                → Body: { "name": "root", "password": "1234" }
POST /api/user                       → Body: { "name": "Bulash", "email": "bulash@test.com" }
PUT  /api/user/1                     → Body: { "name": "Bulash2", "email": "bulash2@test.com" }
DELETE /api/user/1                   → Elimina el usuario con ID 1
```

**English:**

```
GET  /api/user                       → All users
GET  /api/user/1                     → User with ID 1
POST /api/admin                      → Body: { "name": "root", "password": "1234" }
POST /api/admin/login                → Body: { "name": "root", "password": "1234" }
POST /api/user                       → Body: { "name": "Bulash", "email": "bulash@test.com" }
PUT  /api/user/1                     → Body: { "name": "Bulash2", "email": "bulash2@test.com" }
DELETE /api/user/1                   → Deletes user with ID 1
```
---

### 🔌Probando la API / Testing the API

**Español:**
Para probar los endpoints, importa la colección `API-CRUD-CALLS` en Postman o cualquier herramienta que permita hacer llamadas HTTP e importar colecciones o crea tus propias llamadas. Puedes usar de referencia los ejemplos de la sección anterior, añadiendo el token obtenido para las rutas protegidas.

**English:**
To test the endpoints, import the `API-CRUD-CALLS` collection into Postman or any tool that allows making HTTP calls and importing collections or make your own. You can use the examples from the previous section as reference, adding the token for the protected endpoints.

---

### Autenticación / Authentication

**Español:**
Las rutas protegidas requieren un JWT en el header `Authorization`:
```
Authorization: Bearer <token>
```
El token se obtiene al hacer login en `POST /api/admin/login`.

**English:**
Protected routes require a JWT in the `Authorization` header:
```
Authorization: Bearer <token>
```
The token is obtained by logging in at `POST /api/admin/login`.

---

## 🔧 Variables de entorno / Environment Variables

**Español:**

| Variable | Descripción | Default |
|----------|-------------|---------|
| `PORT` | Puerto de la app | `5001` |
| `DB_USER` | Usuario de PostgreSQL | `postgres` |
| `DB_HOST` | Host de la DB | `localhost` |
| `DB_NAME` | Nombre de la DB | `express-crud` |
| `DB_PORT` | Puerto de PostgreSQL | `5431` |
| `DB_PASSWORD` | Contraseña de PostgreSQL | — |
| `JWT_SECRET` | Secreto para firmar JWTs | — |

**English:**

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | App port | `5001` |
| `DB_USER` | PostgreSQL user | `postgres` |
| `DB_HOST` | Database host | `localhost` |
| `DB_NAME` | Database name | `express-crud` |
| `DB_PORT` | PostgreSQL port | `5431` |
| `DB_PASSWORD` | PostgreSQL password | — |
| `JWT_SECRET` | Secret for signing JWTs | — |

---

## ⁉️ FAQ

**Español:**

* **¿Qué pasa si borro el contenedor de Docker?** No se pierde nada. El volumen persiste y al recrear el contenedor los datos siguen ahí.
* **¿Qué pasa si borro el volumen de Docker?** Se pierden todos los datos de la DB. Las tablas se vuelven a crear automáticamente al reiniciar el contenedor.
* **¿Cómo borro el volumen también?** Usa `docker compose down -v`. Sin la `-v` solo se eliminan los contenedores, el volumen queda guardado.
* **¿Puedo usar npm en vez de pnpm?** Sí, pero el proyecto está configurado para pnpm. Si usas npm, asegúrate de tener el lockfile correcto.
* **¿Puedo cambiar los tiempos e intentos del rate limiter?** Sí. Edita `src/middleware/rateLimiter.js` y modifica los valores de `windowMs` (ventana de tiempo en milisegundos) y `max` (máximo de requests permitidos).

**English:**

* **What happens if I delete the Docker container?** Nothing is lost. The volume persists and when the container is recreated the data is still there.
* **What happens if I delete the Docker volume?** All DB data is lost. Tables are automatically recreated when the container restarts.
* **How do I delete the volume too?** Run `docker compose down -v`. Without the `-v` only containers are removed; the volume stays.
* **Can I use npm instead of pnpm?** Yes, but the project is configured for pnpm. If you use npm, make sure you have the correct lockfile.
* **Can I change the rate limiter times and attempts?** Yes. Edit `src/middleware/rateLimiter.js` and modify the `windowMs` value (time window in milliseconds) and `max` value (maximum allowed requests).
