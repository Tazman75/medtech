# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-04-02 21:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('csc394', '0004_auto_20160402_0445'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='name',
            new_name='product_name',
        ),
        migrations.AddField(
            model_name='product',
            name='manufacturer_url',
            field=models.URLField(default=2),
            preserve_default=False,
        ),
    ]