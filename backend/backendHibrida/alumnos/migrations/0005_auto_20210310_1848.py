# Generated by Django 3.1.7 on 2021-03-10 23:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('alumnos', '0004_auto_20210301_1944'),
    ]

    operations = [
        migrations.RenameField(
            model_name='alumno',
            old_name='statura',
            new_name='estatura',
        ),
    ]
