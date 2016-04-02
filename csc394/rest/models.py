from django.db import models
from django.contrib.auth.models import User, Group

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    cost = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name

class Evaluation(models.Model):
    product = models.ForeignKey(Product)
    user = models.ForeignKey(User)
    rank = models.IntegerField(default=5)
    comments = models.TextField()

    def __str__(self):
        return "{}:()".format(self.user, self.product)
