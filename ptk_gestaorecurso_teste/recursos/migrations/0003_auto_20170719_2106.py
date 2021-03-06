# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-07-20 00:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recursos', '0002_auto_20170719_2022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agendamento',
            name='google_link',
            field=models.CharField(max_length=500, verbose_name='Google Link'),
        ),
        migrations.AlterField(
            model_name='agendamento',
            name='horario_fim',
            field=models.TimeField(default='00:06', verbose_name='Horario Fim'),
        ),
        migrations.AlterField(
            model_name='agendamento',
            name='horario_inicio',
            field=models.TimeField(default='00:06', verbose_name='Horario Inicio'),
        ),
    ]
