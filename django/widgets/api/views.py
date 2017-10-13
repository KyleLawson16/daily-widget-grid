from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
    RetrieveUpdateAPIView
)

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)

from widgets.models import Weather

# from .permissions import IsOwnerOrReadOnly

from .serializers import (
    WeatherListSerializer,
    WeatherCreateUpdateSerializer,
    WeatherDetailSerializer,
    WeatherDeleteSerializer,
)


class WeatherListAPIView(ListAPIView):
    serializer_class = WeatherListSerializer
    queryset = Weather.objects.all()

class WeatherCreateAPIView(CreateAPIView):
    queryset = Weather.objects.all()
    serializer_class = WeatherCreateUpdateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user,
        )

class WeatherDetailAPIView(RetrieveAPIView):
    queryset = Weather.objects.all()
    serializer_class = WeatherDetailSerializer
    lookup_field = 'unique_id'

class WeatherDeleteAPIView(DestroyAPIView):
    queryset = Weather.objects.all()
    serializer_class = WeatherDeleteSerializer
    lookup_field = 'unique_id'
