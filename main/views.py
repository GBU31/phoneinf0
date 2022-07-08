from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
import json
import phonenumbers
from phonenumbers import geocoder, carrier, timezone

@api_view(['GET', 'POST'])
def home(request):
    if request.method == 'POST':
        for i in request.POST:
            pn = json.loads(i)['val']

        phoneNumber = phonenumbers.parse(f'+{pn}')
        timeZone = timezone.time_zones_for_number(phoneNumber)
        Carrier = carrier.name_for_number(phoneNumber, 'en')
        Region = geocoder.description_for_number(phoneNumber, 'en')
        Valid = phonenumbers.is_valid_number(phoneNumber)

        return HttpResponse(f"timezone:{timeZone}, carrier:{Carrier}, region:{Region}, valid:{Valid}")

    elif request.method == 'GET':
        return render(request, 'index.html')