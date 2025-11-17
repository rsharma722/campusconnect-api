import { db } from '../config/firebase';
import { Participant } from '../models/participant';

const col = db.collection('participants');

export const create = async (p: Participant): Promise<Participant> => {
  const ref = await col.add(p);
  const doc = await ref.get();
  return { id: doc.id, ...doc.data() } as Participant;
};

export const findByUser = async (userId: string): Promise<Participant[]> => {
  const snap = await col.where('userId', '==', userId).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() })) as Participant[];
};

export const update = async (id: string, data: Partial<Participant>): Promise<Participant | null> => {
  const ref = col.doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;

  await ref.update(data);
  const updated = await ref.get();
  return { id: updated.id, ...updated.data() } as Participant;
};
