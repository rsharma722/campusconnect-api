import { db } from '../config/firebase';

const eventsCol = db.collection('events');

export const getAll = async () => {
    const snap = await eventsCol.get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getById = async (id: string) => {
    const doc = await eventsCol.doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

export const create = async (data: any) => {
const docRef = await eventsCol.add({
    title: data.title,
    description: data.description ?? '',
    categoryId: data.categoryId ?? null,
    date: data.date ?? new Date().toISOString()
});
    const doc = await docRef.get();
    return { id: doc.id, ...doc.data() };
};

export const update = async (id: string, data: any) => {
    const docRef = eventsCol.doc(id);
    const doc = await docRef.get();
    if (!doc.exists) return null;

    await docRef.update(data);
    const updated = await docRef.get();
    return { id: updated.id, ...updated.data() };
};

export const remove = async (id: string) => {
    const docRef = eventsCol.doc(id);
    const doc = await docRef.get();
    if (!doc.exists) return false;

    await docRef.delete();
    return true;
};
