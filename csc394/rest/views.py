from django.shortcuts import render

from django.contrib.auth import login, logout
from django.conf import settings
from django.contrib.auth.models import User, Group
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
# from allauth.account import app_settings as allauth_settings

import csc394.rest.models as md
import csc394.rest.serializers as sz
from rest_auth.serializers import LoginSerializer
from rest_auth.models import TokenModel

from rest_auth.app_settings import (
    TokenSerializer,
    create_token
)

from rest_framework.authentication import SessionAuthentication, BasicAuthentication

class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

class LoginView(GenericAPIView):

    """
    Check the credentials and return the REST Token
    if the credentials are valid and authenticated.
    Calls Django Auth login method to register User ID
    in Django session framework

    Accept the following POST parameters: username, password
    Return the REST Framework Token Object's key.
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = LoginSerializer
    token_model = TokenModel
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)

    def get_response_serializer(self):
        if getattr(settings, 'REST_USE_JWT', False):
            response_serializer = JWTSerializer
        else:
            response_serializer = TokenSerializer
        return response_serializer

    def login(self):
        self.user = self.serializer.validated_data['user']

        if getattr(settings, 'REST_USE_JWT', False):
            self.token = jwt_encode(self.user)
        else:
            self.token = create_token(self.token_model, self.user, self.serializer)

        if getattr(settings, 'REST_SESSION_LOGIN', True):
            login(self.request, self.user)

    def get_response(self):
        serializer_class = self.get_response_serializer()

        if getattr(settings, 'REST_USE_JWT', False):
            data = {
                'user': self.user,
                'token': self.token
            }
            serializer = serializer_class(instance=data, context={'request': self.request})
        else:
            serializer = serializer_class(instance=self.token, context={'request': self.request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        self.serializer = self.get_serializer(data=self.request.data)
        self.serializer.is_valid(raise_exception=True)
        self.login()
        return self.get_response()

class LogoutView(APIView):

    """
    Calls Django logout method and delete the Token object
    assigned to the current User object.

    Accepts/Returns nothing.
    """
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        try:
            # if allauth_settings.LOGOUT_ON_GET:
            response = self.logout(request)
            # else:
            #     response = self.http_method_not_allowed(request, *args, **kwargs)
        except Exception as exc:
            response = self.handle_exception(exc)

        return self.finalize_response(request, response, *args, **kwargs)

    def post(self, request):
        return self.logout(request)

    def logout(self, request):
        try:
            request.user.auth_token.delete()
        except (AttributeError, ObjectDoesNotExist):
            pass

        logout(request)

        return Response({"success": ("Successfully logged out.")},
                        status=status.HTTP_200_OK)

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = md.User.objects.all().order_by('-date_joined')
    serializer_class = sz.UserSerializer

    permission_classes = (permissions.AllowAny, )
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


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

    permission_classes = (permissions.AllowAny, )
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


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
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, )


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
