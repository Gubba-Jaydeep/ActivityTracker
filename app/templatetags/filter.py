from django import template
from django.conf import settings

register = template.Library()


@register.filter(name='split')
def split(value, key):
    """
      Returns the value turned into a list.
    """
    return value.split(key)


@register.filter(name='replace_space')
def replace_space(value):
    """
        Returns a string by replacing space with underscore
    """
    return value.replace(' ', '_')


@register.filter(name='refactor_process_name')
def refactor_process_name(value):
    """
        Returns a string by checking and removing the extra char in process name
    """
    return value.replace('(run-all)', '')


@register.filter(name='check_if_process_has_no_subprocess')
def check_if_process_has_no_subprocess(dict_data, key):
    """
        Returns a string by checking and removing the extra char in process name
    """
    if key:
        return len(dict_data.get(key)) == 1
    return False


@register.filter(name='check_if_process_is_enable_css')
def check_if_process_is_enable_css(dict_data, key):
    if dict_data.get(key) == 'e':
        return 'btn-success'
    else:
        return 'btn-danger'


@register.filter(name='check_if_process_is_enable_value')
def check_if_process_is_enable_value(dict_data, key):
    if dict_data.get(key) == 'e':
        return 'E'
    else:
        return 'D'


@register.filter(name='is_process_disabled')
def is_process_disabled(dict_data, key):
    if dict_data.get(key) == 'e':
        return False
    else:
        return True


@register.filter(name='has_bi_dashboard_access')
def has_bi_dashboard_access(value):
    return True if str(value).lower() in settings.BI_DASHBOARD_ACCESS else False


@register.filter(name='has_admin_control_access')
def has_admin_control_access(value):
    return True if str(value).lower() in settings.ADMIN_CONTROL_ACCESS else False
