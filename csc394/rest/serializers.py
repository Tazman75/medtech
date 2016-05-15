from django.contrib.auth.models import User, Group
import csc394.rest.models as md
from rest_framework import serializers


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = md.User
#         fields = ('url', 'username', 'email', 'groups')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name')
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Group
        fields = ('id','url', 'name')


class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Company
        fields = ('id', 'name', 'description', 'address', 'url', 'size')


class MessageThreadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.MessageThread
        fields = ('id','user', 'product', 'name')


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Message
        fields = ('id','thread', 'user')


class ProductGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.ProductGroup
        fields = ('id','name', )


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Product
        fields = ('id', 'product_group', 'url', 'name', 'description', 'cost', 'main_image', 'manufacturer_url')

class ProductImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.ProductImage
        fields = ('id', 'product', 'image')

class UserStorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.UserStory
        fields = ('id','product', 'description')


class EvaluationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = md.Evaluation
        fields = ('id','url', 'product', 'user', 'rank', 'comments')
