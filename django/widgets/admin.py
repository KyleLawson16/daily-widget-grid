from django.contrib import admin

# Register your models here.
from .models import Weather

class WeatherModelAdmin(admin.ModelAdmin):
	list_display = ["user", "id", "city"]
	list_display_links = ["user"]

	search_fields = ["user", "id"]
	class Meta:
		model = Weather

admin.site.register(Weather, WeatherModelAdmin)
