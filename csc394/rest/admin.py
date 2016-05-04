from django.contrib import admin

import csc394.rest.models as md
from django.contrib.admin import AdminSite

class MyAdminSite(AdminSite):
    site_header = 'MedTech Administration'

admin_site = MyAdminSite(name='myadmin')

admin_site.register(md.Company)
admin_site.register(md.ProductGroup)
admin_site.register(md.Product)
admin_site.register(md.MessageThread)
admin_site.register(md.UserStory)
admin_site.register(md.Evaluation)
admin_site.register(md.Feature)
admin_site.register(md.ProductFeature)
