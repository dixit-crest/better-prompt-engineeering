import type { FullPrompt } from '../types';

const DB_NAME = 'prompt-engineer-db';
const DB_VERSION = 1;
const STORE_PROJECTS = 'projects';
const STORE_META = 'meta';

export interface IProject {
  id: string;
  name: string;
  savedAt: number;
  prompt: FullPrompt;
}

type MetaKey = 'lastProjectId';

// ─── DB initialisation ────────────────────────────────────────────────────────

let _db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (_db) return Promise.resolve(_db);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      if (!db.objectStoreNames.contains(STORE_PROJECTS)) {
        db.createObjectStore(STORE_PROJECTS, { keyPath: 'id' });
      }

      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META);
      }
    };

    request.onsuccess = (event) => {
      _db = (event.target as IDBOpenDBRequest).result;
      resolve(_db);
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

// ─── Generic helpers ──────────────────────────────────────────────────────────

function tx(
  db: IDBDatabase,
  stores: string | string[],
  mode: IDBTransactionMode = 'readonly',
): IDBTransaction {
  return db.transaction(stores, mode);
}

function promisify<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// ─── Projects CRUD ────────────────────────────────────────────────────────────

export async function getAllProjects(): Promise<IProject[]> {
  const db = await openDB();
  const store = tx(db, STORE_PROJECTS).objectStore(STORE_PROJECTS);
  return promisify<IProject[]>(store.getAll());
}

export async function getProject(id: string): Promise<IProject | undefined> {
  const db = await openDB();
  const store = tx(db, STORE_PROJECTS).objectStore(STORE_PROJECTS);
  return promisify<IProject | undefined>(store.get(id));
}

export async function saveProject(project: IProject): Promise<void> {
  const db = await openDB();
  const store = tx(db, STORE_PROJECTS, 'readwrite').objectStore(STORE_PROJECTS);
  await promisify(store.put(project));
}

export async function deleteProject(id: string): Promise<void> {
  const db = await openDB();
  const store = tx(db, STORE_PROJECTS, 'readwrite').objectStore(STORE_PROJECTS);
  await promisify(store.delete(id));
}

// ─── Meta (last selected project) ────────────────────────────────────────────

export async function getMeta(key: MetaKey): Promise<string | undefined> {
  const db = await openDB();
  const store = tx(db, STORE_META).objectStore(STORE_META);
  return promisify<string | undefined>(store.get(key));
}

export async function setMeta(key: MetaKey, value: string): Promise<void> {
  const db = await openDB();
  const store = tx(db, STORE_META, 'readwrite').objectStore(STORE_META);
  await promisify(store.put(value, key));
}

export async function deleteMeta(key: MetaKey): Promise<void> {
  const db = await openDB();
  const store = tx(db, STORE_META, 'readwrite').objectStore(STORE_META);
  await promisify(store.delete(key));
}
