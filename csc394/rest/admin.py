from django.contrib import admin

import csc394.rest.models as md
from django.contrib.admin import AdminSite
# from django.contrib.contenttypes.admin import TabularInline

class MyAdminSite(AdminSite):
    site_header = 'MedTech Administration'

class ProductFeatureInline(admin.TabularInline):
    model = md.ProductFeature
    fields = (('feature', 'description'),)

class ProductPointInline(admin.TabularInline):
    model = md.ProductPoint
    fields = ('point',)

class InlineImage(admin.TabularInline):
    model = md.ProductImage

class ProductAdmin(admin.ModelAdmin):
    empty_value_display = '-empty-'
    inlines = [
        ProductPointInline,
        InlineImage,
        ProductFeatureInline,
    ]

    # fields = (('company', 'cost'), 'name')

admin_site = MyAdminSite(name='myadmin')

admin_site.register(md.Company)
admin_site.register(md.ProductGroup)
admin_site.register(md.Product, ProductAdmin)
admin_site.register(md.MessageThread)
admin_site.register(md.UserStory)
admin_site.register(md.Evaluation)
admin_site.register(md.Feature)
admin_site.register(md.ProductFeature)
