// src/modules/subjects/subject_service.ts
import Subject, { ISubject } from './subject_models.js';
import User from '../users/user_models.js';
import mongoose from 'mongoose';

export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await Subject.find();
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id);
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await Subject.updateOne({ _id: id }, { $set: updateData });
};

export const deleteSubject = async (id: string) => {
    return await Subject.deleteOne({ _id: id });
};

// Función para obtener todos los estudiantes de una asignatura
export const getStudentsBySubjectId = async (subjectId: string) => {
    const subject = await Subject.findById(subjectId);
    if (!subject) {
        throw new Error('Subject not found');
    }
    
    // Obtener todos los usuarios cuyos IDs están en el array alumni
    const students = await User.find({
        _id: { $in: subject.alumni }
    });
    
    return students;
};

// Función adicional para añadir un estudiante a una asignatura
export const addStudentToSubject = async (subjectId: string, studentId: string) => {
    return await Subject.updateOne(
        { _id: subjectId },
        { $addToSet: { alumni: studentId } } // $addToSet evita duplicados
    );
};

// Función adicional para quitar un estudiante de una asignatura
export const removeStudentFromSubject = async (subjectId: string, studentId: string) => {
    return await Subject.updateOne(
        { _id: subjectId },
        { $pull: { alumni: studentId } }
    );
};