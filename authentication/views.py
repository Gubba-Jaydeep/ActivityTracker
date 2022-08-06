from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.contrib.auth import authenticate, login

from .forms import LoginForm, UserRegistrationForm


# Create your views here.

def user_login(request):
    form = LoginForm(request.POST or None)
    msg = None
    if request.method == "POST":
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(request, username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponse('Authenticated successfully')
                else:
                    return HttpResponse('Account Disabled')
            else:
                return HttpResponse('Invalid Login')

    return render(request, "accounts/login.html", {'form':form})

def register(request):
    if request.method =='POST':
        user_form = UserRegistrationForm(request.POST)
        if user_form.is_valid():
            new_user = user_form.save(commit=False)
            new_user.set_password(user_form.cleaned_data["password1"])
            new_user.save()
            return render(request, 'accounts/register_done.html', {'new_user':new_user})
    else:
        user_form = UserRegistrationForm()
    return render(request, 'accounts/register.html', {'form':user_form})


