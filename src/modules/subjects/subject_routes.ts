// src/modules/subjects/subject_routes.ts
import express from 'express';
import {
    createSubjectHandler,
    getAllSubjectsHandler,
    getSubjectByIdHandler,
    updateSubjectHandler,
    deleteSubjectHandler,
    getSubjectStudentsHandler,
    addStudentToSubjectHandler,
    removeStudentFromSubjectHandler
} from './subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea una nueva asignatura
 *     description: Añade una nueva asignatura con nombre, profesor y lista de alumnos.
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               alumni:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Asignatura creada exitosamente
 */
router.post('/subjects', createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obtiene todas las asignaturas
 *     description: Retorna una lista de todas las asignaturas.
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: Éxito
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obtiene una asignatura por ID
 *     description: Retorna los detalles de una asignatura específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *       404:
 *         description: Asignatura no encontrada
 */
router.get('/subjects/:id', getSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualiza una asignatura por ID
 *     description: Modifica los detalles de una asignatura específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               alumni:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Asignatura actualizada exitosamente
 *       404:
 *         description: Asignatura no encontrada
 */
router.put('/subjects/:id', updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina una asignatura por ID
 *     description: Elimina una asignatura específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Asignatura eliminada exitosamente
 *       404:
 *         description: Asignatura no encontrada
 */
router.delete('/subjects/:id', deleteSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}/students:
 *   get:
 *     summary: Obtiene todos los estudiantes de una asignatura
 *     description: Retorna una lista de todos los usuarios matriculados en la asignatura.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *       404:
 *         description: Asignatura no encontrada
 */
router.get('/subjects/:id/students', getSubjectStudentsHandler);

/**
 * @openapi
 * /api/subjects/{id}/students:
 *   post:
 *     summary: Añade un estudiante a una asignatura
 *     description: Matricula a un estudiante en una asignatura específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Estudiante añadido exitosamente
 *       404:
 *         description: Asignatura o estudiante no encontrado
 */
router.post('/subjects/:id/students', addStudentToSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}/students:
 *   delete:
 *     summary: Elimina un estudiante de una asignatura
 *     description: Desmatricula a un estudiante de una asignatura específica.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Estudiante eliminado exitosamente
 *       404:
 *         description: Asignatura o estudiante no encontrado
 */
router.delete('/subjects/:id/students', removeStudentFromSubjectHandler);

export default router;