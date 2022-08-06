from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.template import loader


@login_required(login_url="/login/")
def index(request):
    # return 'Helo'
    html_template = loader.get_template('index.html')
    return HttpResponse(html_template.render({}, request))
