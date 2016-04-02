from django.shortcuts import render

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from csc394.rest.models import Product, Evaluation
from csc394.rest.serializers import \
    UserSerializer, GroupSerializer, \
    EvaluationSerializer, ProductSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class EvaluationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
