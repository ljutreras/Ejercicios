<%--
  Created by IntelliJ IDEA.
  User: hob
  Date: 27-06-22
  Time: 22:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
    <title>Title</title>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet">
</head>
<body>
<div class="container">

    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Nombre Empleado</th>
            <th scope="col">Apellido Empleado</th>
            <th scope="col">Edad</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="cliente" items="${listaCliente}" >
            <tr>
                <th>id</th>
                <th scope="row">${cliente.id}</th>
                <td>${cliente.nombre}</td>
                <td>${cliente.apellido}</td>
                <td>${cliente.edad}</td>
                <td><a class="btn btn-warning" href="/cliente/editar/${cliente.id}" role="button">Editar</a></td>
                <td><a class="btn btn-danger" href="/cliente/eliminar/${cliente.id}" role="button">Eliminar</a></td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
</body>
</html>
