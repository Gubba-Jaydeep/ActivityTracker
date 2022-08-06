from django.urls import path, include
from . import views, forms
from django.contrib.auth import views as auth_views


urlpatterns = [
    # path('accounts/', include('allauth.urls')),
    # path('login/', views.user_login, name="login"),

    #post views
    path('login/', auth_views.LoginView.as_view(authentication_form=forms.LoginForm), name="login"),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),

    #change password
    path("password_change/", auth_views.PasswordChangeView.as_view(), name="password_change"),
    path("password_change/done", auth_views.PasswordChangeDoneView.as_view(), name="password_change_done"),

    #reset password
    path("password_reset/", auth_views.PasswordResetView.as_view(), name="password_reset"),
    path("password_reset/done", auth_views.PasswordResetDoneView.as_view(), name="password_reset_done"),
    path("reset/<uidb64>/<token>", auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    path("reset/done", auth_views.PasswordResetCompleteView.as_view(), name="password_reset_complete"),

    # all the above 8 paths are present in the below file
    # path('', include('django.contrib.auth.urls')),

    path('register/', views.register, name="register"),
]