# Configuración de Firebase para Analytics

## Pasos para configurar Firebase

### 1. Crear proyecto en Firebase
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Clic en "Crear un proyecto"
3. Nombre del proyecto: `portfolio-analytics` (o el que prefieras)
4. Habilita Google Analytics (opcional)
5. Crea el proyecto

### 2. Configurar Firestore Database
1. En el menú lateral, ve a "Firestore Database"
2. Clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba" (cambiarás las reglas después)
4. Elige la ubicación más cercana a tus usuarios

### 3. Crear credenciales de servicio
1. Ve a "Configuración del proyecto" (ícono de engranaje)
2. Ve a la pestaña "Cuentas de servicio"
3. Clic en "Generar nueva clave privada"
4. Se descargará un archivo JSON con las credenciales

### 4. Configurar variables de entorno
1. Abre el archivo JSON descargado
2. Copia los valores a tu archivo `.env`:

```env
FIREBASE_PROJECT_ID=tu-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\ntu-private-key-aqui\n-----END PRIVATE KEY-----"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@tu-project-id.iam.gserviceaccount.com
```

**IMPORTANTE:** La `FIREBASE_PRIVATE_KEY` debe incluir las comillas y los `\n` para los saltos de línea.

### 5. Configurar reglas de Firestore
Ve a "Firestore Database" > "Reglas" y usa estas reglas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Solo permite escritura desde el servidor (Admin SDK)
    match /analytics/{document} {
      allow read: if false; // Los clientes no pueden leer directamente
      allow write: if false; // Los clientes no pueden escribir directamente
    }
  }
}
```

### 6. Probar la integración
1. Reinicia el servidor de desarrollo: `npm run dev`
2. Visita tu sitio web
3. Interactúa con diferentes secciones
4. Ve a Firebase Console > Firestore Database
5. Deberías ver documentos en la colección `analytics`

## Estructura de datos en Firestore

Cada evento se guarda con esta estructura:

```json
{
  "userId": "usuario-unico-id",
  "sessionId": "sesion-unica-id",
  "type": "page_view", // o "click", "form_submit", etc.
  "data": {
    "section": "hero",
    "language": "es",
    "viewport": {"width": 1920, "height": 1080},
    "referrer": "https://google.com"
  },
  "timestamp": 1691234567890,
  "createdAt": "Timestamp de Firestore"
}
```

## Monitoreo

Para ver los analytics:
- Dashboard: `http://localhost:4321/analytics-dashboard`
- API directa: `http://localhost:4321/api/analytics?report=weekly`

## Seguridad

- Las credenciales están en variables de entorno
- Firestore está configurado para solo aceptar escrituras del servidor
- Los clientes no pueden leer o escribir directamente a la base de datos