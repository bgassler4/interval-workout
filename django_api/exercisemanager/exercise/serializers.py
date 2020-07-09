from rest_framework import serializers
from exercise.models import Exercise

# Exercise Serializer
class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'