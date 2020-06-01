# Requisições HTTP

## Usuário

### Registro

**/auth/register** [_POST_]

```json
{
	"email": "",
	"password": ""
}
```

### Login

**/auth/authenticate** [_POST_]

```json
{
	"email": "",
	"password": ""
}
```

### Logout

**/auth/logout** [_POST_]

- Necessária a autenticação


## Tarefas

### Listar todas

**/todo** [_GET_]

- Necessária a autenticação

### Exibir específica

**/todo/_id_** [_GET_]

- Necessária a autenticação

### Listar por prioridade alta

**/todo/high** [_GET_]

- Necessária a autenticação

### Criar 

**/todo** [_POST_]

Prioridade opcional

```json
{
	"title": "",
	"priority": "" 
}
```

- Necessária a autenticação

### Atualizar dado

**/todo/_id_** [_PUT_]

```json
{
	"campoDesejado": "",
}
```

- Necessária a autenticação

### Deletar

**/todo/_id_** [_DELETE_]

- Necessária a autenticação
