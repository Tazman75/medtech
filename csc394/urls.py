"""csc394 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf.urls import url, include

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import TemplateView

from rest_framework import routers
from csc394.rest import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'companies', views.CompanyViewSet)
router.register(r'message_threads', views.MessageThreadViewSet)
router.register(r'message', views.MessageViewSet)
router.register(r'product_groups', views.ProductGroupViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'user_stories', views.UserStoryViewSet)
router.register(r'evaluation', views.EvaluationViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html'), name="home"),
    url(r'^rest/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
# urlpatterns.append(static(settings.STATIC_URL, document_root=settings.STATIC_ROOT))
