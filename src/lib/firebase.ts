import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAnalytics, type Analytics } from "firebase/analytics";
import { initializeApp as initializeAdminApp, getApps as getAdminApps, cert, type App as AdminApp } from 'firebase-admin/app';
import { getFirestore as getAdminFirestore, type Firestore as AdminFirestore } from 'firebase-admin/firestore';

// Client-side Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.PUBLIC_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase client (for client-side usage)
let app: FirebaseApp;
let db: Firestore;
let analytics: Analytics;

if (typeof window !== 'undefined') {
  // Client-side initialization
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
  analytics = getAnalytics(app);
}

// Server-side Firebase Admin configuration
let adminApp: AdminApp;
let adminDb: AdminFirestore;

if (typeof window === 'undefined') {
  // Server-side initialization
  try {
    const serviceAccount = {
      projectId: import.meta.env.FIREBASE_PROJECT_ID,
      privateKey: import.meta.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
    };

    adminApp = getAdminApps().length === 0 
      ? initializeAdminApp({
          credential: cert(serviceAccount),
          projectId: serviceAccount.projectId,
        })
      : getAdminApps()[0];
    
    adminDb = getAdminFirestore(adminApp);
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error);
    throw error;
  }
}

export { db, adminDb, analytics };
export type { Firestore, AdminFirestore, Analytics };