from rest_framework import serializers
from .models import Item
class InventarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        # fields = ('id', 'label', 'model', 'price', 'sn') One by One
        fields = '__all__' #All