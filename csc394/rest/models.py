from django.db import models
from django.contrib.auth.models import User, Group

class Company(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    address = models.CharField(max_length=50)
    url = models.URLField(blank=True)
    size = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name

class MessageThread(models.Model):
    user = models.ForeignKey(User, unique=True)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Message(models.Model):
    thread = models.ForeignKey(MessageThread, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, unique=True)
    note = models.CharField(max_length=250)

    def __str__(self):
        return self.note


class ProductGroup(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Product(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    product_group = models.ForeignKey(ProductGroup)
    name = models.CharField(max_length=50)
    description = models.TextField()
    cost = models.DecimalField(max_digits=8, decimal_places=2)
    manufacturer_url = models.URLField(blank=True)

    def __str__(self):
        return self.name

class UserStory(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return self.product_name

class Evaluation(models.Model):
    product = models.ForeignKey(Product)
    user = models.ForeignKey(User)
    rank = models.IntegerField(default=5)
    comments = models.TextField()

    def __str__(self):
        return "{}:()".format(self.user, self.product)
