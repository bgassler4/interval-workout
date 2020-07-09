from exercise.models import Exercise
from rest_framework import viewsets, permissions
from .serializers import ExerciseSerializer

# Exercise Viewset
class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExerciseSerializer