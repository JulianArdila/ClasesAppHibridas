# Generated by Django 3.1.7 on 2021-02-27 01:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumnos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alumno',
            name='codigo',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='alumno',
            name='statura',
            field=models.FloatField(blank=True, null=True),
        ),
    ]