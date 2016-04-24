from django.shortcuts import render

from django.contrib.auth.models import User, Group
from rest_framework import permissions
from rest_framework import viewsets
import csc394.rest.models as md
import csc394.rest.serializers as sz


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = md.User.objects.all().order_by('-date_joined')
    serializer_class = sz.UserSerializer

    permission_classes = (permissions.AllowAny, )


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = md.Group.objects.all()
    serializer_class = sz.GroupSerializer


class CompanyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = md.Company.objects.all()
    serializer_class = sz.CompanySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )


class MessageThreadViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = md.Group.objects.all()
    serializer_class = sz.MessageThreadSerializer


class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = md.Message.objects.all()
    serializer_class = sz.MessageSerializer


class ProductGroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = md.ProductGroup.objects.all()
    serializer_class = sz.ProductGroupSerializer

    permission_classes = (permissions.IsAdminUser, )

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = md.Product.objects.all()
    serializer_class = sz.ProductSerializer


class UserStoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = md.UserStory.objects.all()
    serializer_class = sz.UserStorySerializer


class EvaluationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = md.Evaluation.objects.all()
    serializer_class = sz.EvaluationSerializer
