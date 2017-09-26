# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-07-19 23:22
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recursos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='agendamento',
            name='google_link',
            field=models.CharField(default=2, max_length=100, verbose_name='Google Link'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='agendamento',
            name='data_agendamento',
            field=models.DateField(default=datetime.date.today, verbose_name='Data'),
        ),
        migrations.AlterField(
            model_name='agendamento',
            name='horario_fim',
            field=models.TimeField(default='23:20', verbose_name='Horario Fim'),
        ),
        migrations.AlterField(
            model_name='agendamento',
            name='horario_inicio',
            field=models.TimeField(default='23:20', verbose_name='Horario Inicio'),
        ),
    ]