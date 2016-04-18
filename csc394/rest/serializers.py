from django.contrib.auth.models import User, Group
import csc394.rest.models as md
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Group
        fields = ('url', 'name')


class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Company
        fields = ('name', 'description', 'address', 'url', 'size')


class MessageThreadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.MessageThread
        fields = ('user', 'product', 'name')


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Message
        fields = ('thread', 'user')


class ProductGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.ProductGroup
        fields = ('name')


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Product
        fields = ('product_group', 'url', 'name', 'description', 'cost', 'manufacturer_url')


class UserStorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.UserStory
        fields = ('product', 'description')


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Evaluation
        fields = ('url', 'product', 'user', 'rank', 'comments')
