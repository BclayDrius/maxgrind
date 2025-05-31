from django.shortcuts import render, redirect
from .forms import registerform
from django.contrib import messages
from django.db import IntegrityError
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password

def index(request):
    return render(request, 'index.html')

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)

        if user is not None:
            auth_login(request, user)
            return redirect('principal')
        else:
            # Puedes hacer mensajes más específicos comprobando si existe el usuario:
            from mi_app.models import CustomUser  # Ajusta al path correcto
            try:
                CustomUser.objects.get(email=email)
                messages.error(request, 'Contraseña incorrecta.')
            except CustomUser.DoesNotExist:
                messages.error(request, 'Correo no existe.')
    return render(request, 'login.html')

def register(request):
    if request.method == 'POST':
        form = registerform(request.POST)
        if form.is_valid():
            try:
                user = form.save(commit=False)
                user.email = form.cleaned_data['email']
                user.save()
                messages.success(request, 'Cuenta creada con éxito.')
                return redirect('login')
            except IntegrityError as e:
                print('Error guardando usuario:', e)
                messages.error(request, 'Error guardando usuario, puede que el usuario ya exista.')
        else:
            print('Errores:', form.errors)
    else:
        form = registerform()
    return render(request, 'register.html', {'form': form})

def principal(request):
    return render(request, 'principal.html')