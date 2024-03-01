from django.forms import ModelForm
from .models import Dictamen
from .models import Estudiante
from .models import Publicacion

class DictamenForm(ModelForm):
    class Meta:
        model = Dictamen 
        fields = ['Titulo', 'IDuser', 'Nombre', 'Oficina', 'Direccion', 'Marca', 'Modelo', 'Num_Serie', 'Caracteristicas', 'Analisis', 'Dictamen_Final', 'Pendiente']
        
class PublicacionForm(ModelForm):
    class Meta:
        model = Publicacion
        fields = ['Titulo', 'IDuser', 'Ubicacion', 'Descripcion', 'Contenido', 'imagen']
        
class EstudianteForm(ModelForm):
    class Meta:
        model = Estudiante
        fields = '__all__'
            
