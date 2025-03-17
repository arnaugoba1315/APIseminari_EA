// src/modules/subjects/subject_controller.ts
import { Request, Response } from 'express';
import {
    createSubject,
    getAllSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject,
    getStudentsBySubjectId,
    addStudentToSubject,
    removeStudentFromSubject
} from './subject_service.js';

export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await createSubject(req.body);
        res.status(201).json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllSubjects();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateSubject(req.params.id, req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteSubject(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para obtener todos los estudiantes de una asignatura
export const getSubjectStudentsHandler = async (req: Request, res: Response) => {
    try {
        const students = await getStudentsBySubjectId(req.params.id);
        res.json(students);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para añadir un estudiante a una asignatura
export const addStudentToSubjectHandler = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.body;
        if (!studentId) {
            return res.status(400).json({ message: 'Student ID is required' });
        }
        
        const result = await addStudentToSubject(req.params.id, studentId);
        res.json({ message: 'Student added to subject successfully', result });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para quitar un estudiante de una asignatura
export const removeStudentFromSubjectHandler = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.body;
        if (!studentId) {
            return res.status(400).json({ message: 'Student ID is required' });
        }
        
        const result = await removeStudentFromSubject(req.params.id, studentId);
        res.json({ message: 'Student removed from subject successfully', result });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};