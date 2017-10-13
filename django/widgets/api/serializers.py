from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField
)

from widgets.models import Weather

weather_detail_url = HyperlinkedIdentityField(
    view_name='api:detail',
    lookup_field='unique_id'
)

class WeatherListSerializer(ModelSerializer):
    url = weather_detail_url
    class Meta:
        model = Weather
        fields = [
            'url',
            'id',
            'unique_id',
            'city',
        ]

class WeatherCreateUpdateSerializer(ModelSerializer):
    class Meta:
        model = Weather
        fields = [
            'city',
        ]

class WeatherDeleteSerializer(ModelSerializer):
    class Meta:
        model = Weather


class WeatherDetailSerializer(ModelSerializer):
    user = SerializerMethodField()
    class Meta:
        model = Weather
        fields = [
            'user',
            'id',
            'city',
        ]

    def get_user(self, obj):
        return str(obj.user.username)
