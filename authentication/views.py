from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.contrib.auth import authenticate, login

from .forms import LoginForm, UserRegistrationForm, UserEditForm, ProfileEditForm
from .models import Profile

from django.contrib import messages


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
    user_form = UserRegistrationForm(request.POST or None)
    if request.method =='POST':
        if user_form.is_valid():
            new_user = user_form.save(commit=False)
            new_user.set_password(user_form.cleaned_data["password1"])
            new_user.save()
            Profile.objects.create(user=new_user)
            return render(request, 'accounts/register_done.html', {'new_user':new_user})
    return render(request, 'accounts/register.html', {'form':user_form})


@login_required
def edit(request):
    if request.method == 'POST':
        user_form = UserEditForm(instance=request.user,data=request.POST)
        profile_form = ProfileEditForm(instance=request.user.profile, data=request.POST, files=request.FILES)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            messages.success(request, "Profile Updated Succcessfully")
        else:
            messages.error(request, "Error while updating profile")
    else:
        user_form = UserEditForm(instance=request.user)
        profile_form = ProfileEditForm(instance=request.user.profile)
    return render(request, 'accounts/edit.html', {'user_form': user_form, 'profile_form':profile_form})