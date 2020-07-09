from django.db import models

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    #id = models.CharField(max_length=4, unique=True)
    description = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

