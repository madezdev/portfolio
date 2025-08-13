# 📧 Configuración del Email para el Formulario de Contacto

## Pasos para Configurar Gmail SMTP

### 1. Activar Verificación en 2 Pasos
1. Ve a [myaccount.google.com](https://myaccount.google.com)
2. Seguridad → Verificación en 2 pasos
3. Actívala si no la tienes

### 2. Generar App Password
1. Ve a [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Selecciona "Correo" y "Otro (nombre personalizado)"
3. Escribe "Portfolio Contact Form"
4. **Copia la contraseña generada** (16 caracteres)

### 3. Configurar Variables de Entorno

#### Para Desarrollo Local:
Crea el archivo `.env.local`:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=madezdev@gmail.com
SMTP_PASS=tu-app-password-de-16-caracteres
```

#### Para Vercel (Producción):
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega estas variables:
   - `SMTP_HOST`: `smtp.gmail.com`
   - `SMTP_PORT`: `587`
   - `SMTP_USER`: `madezdev@gmail.com`
   - `SMTP_PASS`: `tu-app-password-de-16-caracteres`

### 4. Otros Proveedores SMTP

#### Outlook/Hotmail:
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=tu-email@outlook.com
SMTP_PASS=tu-contraseña
```

#### Yahoo:
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=tu-email@yahoo.com
SMTP_PASS=tu-app-password
```

#### SendGrid (Recomendado para producción):
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=tu-sendgrid-api-key
```

## Funcionalidades del Formulario

### ✅ Características Implementadas:
- **Doble Email**: Se envía un email al propietario y confirmación al remitente
- **Plantillas HTML**: Emails con diseño profesional y responsive
- **Validación**: Campos requeridos y formato de email
- **Manejo de Errores**: Mensajes específicos en español e inglés
- **Información Completa**: Incluye nombre, email, asunto, presupuesto y mensaje
- **Reply-To**: El email del propietario tiene reply-to del remitente

### 📧 Emails que se Envían:

#### Email al Propietario (madezdev@gmail.com):
- **Asunto**: "💼 Nuevo contacto: [Asunto] - [Nombre]"
- **Contenido**: Toda la información del formulario con diseño profesional
- **Reply-To**: Email del remitente para responder directamente

#### Email de Confirmación al Remitente:
- **Asunto**: "✅ Mensaje recibido - Te responderé pronto"
- **Contenido**: Confirmación con resumen del mensaje y links a redes sociales
- **Branding**: Incluye enlaces a LinkedIn, GitHub y WhatsApp

## Testing

### Desarrollo Local:
```bash
npm run dev
# Ve a http://localhost:4321 y prueba el formulario
```

### Verificar en Producción:
1. Deploy a Vercel
2. Configura las variables de entorno
3. Prueba el formulario
4. Verifica que lleguen ambos emails

## Troubleshooting

### Error "Authentication failed":
- Verifica que la App Password esté correcta
- Asegúrate de que la verificación en 2 pasos esté activada

### Error "Connection timeout":
- Verifica las variables SMTP_HOST y SMTP_PORT
- Revisa la conectividad de red

### No llegan los emails:
- Revisa la carpeta de spam
- Verifica que SMTP_USER sea correcto
- Confirma que las variables de entorno estén configuradas en Vercel

### Error 500 en la API:
- Revisa los logs de Vercel
- Verifica que todas las variables de entorno estén configuradas
- Asegúrate de que Nodemailer esté en las dependencias

## Logs

Para ver los logs en desarrollo:
```bash
# Los errores aparecerán en la consola del servidor
npm run dev
```

Para ver logs en producción:
```bash
# Ve a Vercel Dashboard → Tu Proyecto → Functions → View Function Logs
```