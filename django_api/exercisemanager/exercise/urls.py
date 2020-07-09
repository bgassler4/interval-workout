from rest_framework import routers
from .api import ExerciseViewSet

router = routers.DefaultRouter()
router.register('api/exercise', ExerciseViewSet, 'exercise')

urlpatterns = router.urls