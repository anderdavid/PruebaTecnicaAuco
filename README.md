# PRUEBA TECNICA AUCO

## REQUERIMIENTOS

    Construir un servicio en Node.js con dos endpoints:

    - POST /validations: recibe un nombre y un número de documento, consulta una API pública gratuita (por ejemplo, una de países o de tipo de cambio) para enriquecer el registro, lo guarda en MongoDB y responde con un id.
    - GET /validations/:id: devuelve el registro guardado.

    Además, cada creación debe escribir un evento de auditoría en DynamoDB Local, con llave por documento y fecha.

    El servicio debe incluir:

    - Validación de entradas.
    - Manejo de errores de la API externa.
    - Al menos tres pruebas automatizadas.
    - Un README que explique cómo correrlo.

    QUÉ DEBES ENTREGAR ADEMÁS DEL CÓDIGO

    1. Un párrafo sobre cómo usaste la IA: qué le pediste y qué tuviste que corregir.
    2. Por qué elegiste esas llaves en DynamoDB.
    3. Qué mejorarías con más tiempo.

## Requerimientos para desplegar proyecto

    Debes tener instalado docker y node

```
docker -v
node -v
```

- Mi version docker: Docker version 29.9.3, build 5457199
- Mi version node: v26.13.0

### Desplegar proyecto

```
npm run build
```

### ver consola

```
npm run logs
```

## probar servicio

#### crear validation

```
curl --location 'http://localhost:3000/validations' \
	--header 'Content-Type: application/json' \
	--data '{
		"nombre": "minombre",
		"numeroDocumento": "234561"
	}'
```

#### ver validacion

```
curl --location 'http://localhost:3000/validations/{{id}}'
```

#### ver todas las validaciones

```
curl --location 'http://localhost:3000/validations'
```

#### ver las autorias

```
curl --location 'http://localhost:3000/auditories'
```

### ejecutar pruebas unitarias

```
npm run test
```
