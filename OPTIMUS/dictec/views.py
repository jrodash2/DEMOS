from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError
from .forms import DictamenForm
from .forms import PublicacionForm
from .forms import EstudianteForm
from .models import Dictamen
from .models import Carrera
from .models import Estudiante
from .models import Curso
from .models import Matricula
from .models import Grado
from .models import Publicacion

from datetime import datetime

# Create your views here.



def signup(request):

    if request.method == 'GET':
        return render(request, 'signup.html', {
            'form': UserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:
            # register user
            try:
                user = User.objects.create_user(
                    username=request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('dashboard')
            except IntegrityError:
                return render(request, 'signup.html', {
                    'form': UserCreationForm,
                    "error": 'El usuario ya existe'
                })

        return render(request, 'signup.html', {
            'form': UserCreationForm,
            "error": 'Password no coninciden'
        })


def home(request):
    publicacions = Publicacion.objects.all().order_by("-Creacion")
    return render(request,'new.html', {'publicacions': publicacions})

def dictamen(request):
    publicacions = Publicacion.objects.all().order_by("-Creacion")
    return render(request,'dictamen.html', {'publicacions': publicacions})


def create_dictamen(request):
    
    if request.method == 'GET':
        return render(request, 'crear_dictamen.html', {
            'form': DictamenForm
        })
    else:
        form = DictamenForm(request.POST)
        new_dic = form.save(commit=False)
        new_dic.user = request.user
        new_dic.save()
        return redirect('dictamen')
       
def new(request):
    publicacions = Publicacion.objects.all().order_by("-Creacion")
    return render(request,'new.html', {'publicacions': publicacions})

def colegio(request):
    estudiantes = Estudiante.objects.all().order_by("apellidoPaterno")
    return render(request,'colegio.html', {'estudiantes': estudiantes})

def dnew(request, new_id):
    publicacion = Publicacion.objects.get(pk=new_id)
    return render(request, 'dnew.html', {'publicacion': publicacion})

def colegio_tarjeta(request, est_id):
    estudiante = Estudiante.objects.get(pk=est_id)
    return render(request, 'colegio_tarjeta.html', {'estudiante': estudiante})


def comp(request, new_id):
    publicacion = Publicacion.objects.get(pk=new_id)
    return render(request, 'comp.html', {'publicacion': publicacion})

 
def ind(request):
    return render(request, 'ind.html')
    

def dashboard(request):
    return render(request, 'dashboard.html')


def signout(request):
    logout(request)
    return redirect('home')


def signin(request):
    if request.method == 'GET':
        return render(request, 'signin.html', {
            'form': AuthenticationForm
        })
    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password']
        )
        if user is None:
            return render(request, 'signin.html', {
            'form': AuthenticationForm,
            'error': 'Usuario o Password es Incorecto'
        })
        else:
            login(request, user)
            return redirect('ind')

       