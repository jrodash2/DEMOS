
from django.contrib import admin
from .models import Dictamen
from .models import Publicacion
from .models import Carrera
from .models import Estudiante
from .models import Curso
from .models import Matricula
from .models import Grado

class Dicadmin(admin.ModelAdmin):
    readonly_fields =("Creacion", )
    
# Register your models here.
admin.site.register(Dictamen, Dicadmin)
admin.site.register(Publicacion)
admin.site.register(Carrera)
admin.site.register(Estudiante)
admin.site.register(Curso)
admin.site.register(Matricula)
admin.site.register(Grado)
