# Generated by Django 5.0.4 on 2025-01-04 07:20

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_patient_en_cours_traitement'),
    ]

    operations = [
        migrations.AddField(
            model_name='bilanbiologique',
            name='date_creation',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='bilanradiologique',
            name='date_creation',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
