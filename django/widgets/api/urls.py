from django.conf.urls import url
from django.contrib import admin

from .views import (
    WeatherListAPIView,
    WeatherCreateAPIView,
    WeatherDetailAPIView
	)

urlpatterns = [
	url(r'^weather/$', WeatherListAPIView.as_view(), name='list'),
    url(r'^weather/create/$', WeatherCreateAPIView.as_view(), name='create'),
    url(r'^weather/(?P<unique_id>\w+)/$', WeatherDetailAPIView.as_view(), name='detail'),
    # url(r'^(?P<random_videogate_id>\w+)/edit/$', LeadGenUpdateAPIView.as_view(), name='update'),
    # url(r'^(?P<random_videogate_id>\w+)/delete/$', LeadGenDeleteAPIView.as_view(), name='delete'),
]
