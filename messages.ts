const messages = {
    system: {
        INTERNAL_ERROR: 'Error Interno',
        UNEXPECTED_ERROR: 'Error inesperado',
        ERROR_NOT_FOUNT: 'No se encontró',
        UPDATE_SUCCESS: 'UPDATE SUCCESS',
        UPDATE_ERROR: 'UPDATE ERROR',
        HANDLE_ERROR: 'ERROR',
        HANDLE_SUCCESS: 'SUCCESS',
        PARAMS_ERROR: 'Parámetro incorrecto',
        TOKEN_ERROR: 'No autorizado',
        MIDDLEWARE_ERROR_EMAIL: (field: string) => `El campo "${field}" email es incorrecto`,
        MIDDLEWARE_ERROR_REGEX: (field: string) => `El formato del campo "${field}" es incorrecto`,
        MIDDLEWARE_ERROR_REQUIRED: (field: string) => `El campo "${field}" es requerido`,
    },
    users: {
        LOGIN_FAILED: 'Email o contraseña incorrectos',
        EMAIL_REQUIRED: 'El email es requerido',
        EMAIL_INVALID: 'El formato de email es incorrecto',
        PASSWORD_REQUIRED: 'La contraseña es requerida',
        PASSWORD_INVALID: 'El formato de contraseña es incorrecto. Debe contener minimo 8 caracteres, una mayuscula, un numero y algun de los caracteres !@#$%^&*.'
    },
}

export default messages