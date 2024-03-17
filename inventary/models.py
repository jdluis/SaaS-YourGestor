from django.db import models

# Create your models here.
class Item(models.Model):
    STATUS_OPTIONS = {
        "OK": "Good",
        "AVERIA": "Not Good",
        "ROTO": "Broke",
        "REPARANDO": 'Reparando'
    }
    CATEGORY_OPTIONS = {
        "POR": "Portatil",
        "OSM": "Ordenador de Sobremesa",
        "PAN": "Pantalla",
        "RAT": 'Ratón'
    }
    label = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    price = models.IntegerField()
    sn = models.CharField(max_length=200)
    category = models.CharField(max_length=200, choices=CATEGORY_OPTIONS)
    status = models.CharField(max_length=10, choices=STATUS_OPTIONS)

    def __str__(self) -> str:
        return self.label + ' | ' + self.category
