import { db } from '../config/firebase';
import { Category } from '../models/category';

const col = db.collection('categories');

export const getAll = async (): Promise<Category[]> => {
  const snap = await col.get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() })) as Category[];
};

export const create = async (data: Category): Promise<Category> => {
  const ref = await col.add(data);
  const doc = await ref.get();
  return { id: doc.id, ...doc.data() } as Category;
};

export const update = async (id: string, data: Partial<Category>): Promise<Category | null> => {
  const ref = col.doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;

  await ref.update(data);
  const updated = await ref.get();
  return { id: updated.id, ...updated.data() } as Category;
};

export const remove = async (id: string): Promise<boolean> => {
  const ref = col.doc(id);
  const doc = await ref.get();
  if (!doc.exists) return false;

  await ref.delete();
  return true;
};
