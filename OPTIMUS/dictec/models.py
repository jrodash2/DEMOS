from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Dictamen(models.Model):
  Titulo = models.CharField(max_length=200)
  IDuser = models.CharField(max_length=20)
  Nombre = models.CharField(max_length=80)
  Oficina = models.CharField(max_length=80)
  Direccion = models.CharField(max_length=80)  
  Marca = models.CharField(max_length=80)
  Modelo = models.CharField(max_length=80)
  Num_Serie = models.CharField(max_length=80)
  Caracteristicas = models.CharField(max_length=200)
  Analisis = models.TextField(max_length=1000)
  Dictamen_Final = models.TextField(max_length=1000)
  Creacion = models.DateTimeField(auto_now_add=True)
  Datecompleted = models.DateTimeField(null=True, blank=True)
  Pendiente = models.BooleanField(default=False)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.Titulo + ' - ' + self.user.username
  
class Publicacion(models.Model):
  Titulo = models.CharField(max_length=200)
  IDuser = models.CharField(max_length=20)
  Descripcion = models.CharField(max_length=80)
  Ubicacion = models.CharField(max_length=80)  
  Contenido = models.CharField(max_length=200)
  Creacion = models.DateTimeField(auto_now_add=True)
  imagen = models.ImageField(upload_to='imgpublic')
  Datecompleted = models.DateTimeField(null=True, blank=True)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  
  def __str__(self):
    return self.Titulo + ' - ' + self.user.username
  
  
  
class Carrera(models.Model):
  codigo = models.CharField(max_length=3, primary_key=True)
  nombre = models.CharField(max_length=50)
  duracion =models.PositiveSmallIntegerField(default=3)
  
  def __str__(self):
        txt = "{0} (Duración: {1} año(s))"
        return txt.format(self.nombre, self.duracion)
        
class Grado(models.Model):
  codigo = models.CharField(max_length=3, primary_key=True)
  nombre = models.CharField(max_length=50)
  carrera =models.ForeignKey(Carrera, null=False, blank=False, on_delete=models.CASCADE)
    
  def __str__(self):
        txt = "{0} (Duración: {1} año(s))"
        return txt.format(self.nombre, self.carrera)
             
class Curso(models.Model):
  codigo =models.CharField(max_length=6, primary_key=True)
  nombre =models.CharField(max_length=30)
  creditos = models.PositiveIntegerField()
  grado =models.ForeignKey(Grado, null=False, blank=False, on_delete=models.CASCADE)
  docente =models.CharField(max_length=100)
  
  def __str__(self):
        txt = "{0} ({1}) /  Grado: {2}"
        return txt.format(self.nombre, self.codigo, self.grado)
      
class Estudiante(models.Model):
  cui = models.FloatField(max_length=13)
  apellidoPaterno =models.CharField(max_length=35)
  apellidoMaterno =models.CharField(max_length=35)
  nombres =models.CharField(max_length=35)
  fechaNacimiento = models.DateField()
  sexos = [
    ('F', 'Femenino'),
    ('M', 'Masculino')
  ]
  sexo =models.CharField(max_length=1, choices=sexos, default='F')
  vigencia =models.BooleanField(default=True)
  
  def nombreCompleto(self):
      txt = "{0} {1}, {2}"
      return txt.format(self.apellidoPaterno, self.apellidoMaterno, self.nombres)
      
  def __str__(self):
        txt = "{0} / Estado: {1}"
        if self.vigencia:
              estadoEstudiante = "VIGENTE"
        else: 
          estadoEstudiante = "DE BAJA"
        return txt.format(self.nombreCompleto(), estadoEstudiante)
          


  
class Matricula(models.Model):
  id =models.AutoField(primary_key=True)
  estudiante =models.ForeignKey(Estudiante, null=False, blank=False, on_delete=models.CASCADE)
  curso =models.ForeignKey(Curso, null=False, blank=False, on_delete=models.CASCADE)
  fechaMatricula =models.DateTimeField(auto_now_add=True)
  
  def __str__(self):
        txt = "{0} matriculada {1} en el curso {2} / Fecha: {3}"
        if self.estudiante.sexo == "F":
              letraSexo = "a"
        else:
              letraSexo = "o"
        fecMat = self.fechaMatricula.strftime("%A %d/%m/%y %H:%M:%S")
        return txt.format(self.estudiante.nombreCompleto(), letraSexo, self.curso, fecMat)
        
    