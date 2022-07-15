<%--
  Created by IntelliJ IDEA.
  User: hob
  Date: 28-06-22
  Time: 22:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
  <title>Cliente</title>
</head>
<body>

<div>
  <%--@elvariable id="usuario" type="java"--%>
  <form:form action="/cliente/actualizar/${cliente.id}" method="post" modelAttribute="cliente">
    <form:label path="nombre">Nombre Cliente:</form:label>
    <form:input path="nombre"/>
    <br>
    <form:label path="apellido">Apellido Cliente:</form:label>
    <form:input path="apellido"/>
    <br>
    <form:label path="edad">Edad:</form:label>
    <form:input type="number" path="edad"/>
    <br>
    <button type="submit">Guardar</button>


  </form:form>
</div>

</body>
</html>