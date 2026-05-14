import express from 'express';
import cors from 'cors';

import estudiantesRoutes from './routes/estudiantes.route.js';
import carrerasRoutes from './routes/carreras.route.js';
import ciclosRoutes from './routes/ciclos.route.js';
import usuariosRoutes from './routes/usuarios.route.js';

const app = express();

// ── CORS: permite peticiones desde cualquier origen (frontend) ──
app.use(cors());

app.use(express.json());

app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/carreras', carrerasRoutes);
app.use('/api/ciclos', ciclosRoutes);
app.use('/api/usuarios', usuariosRoutes);

export default app;