# Generated by Django 5.0.3 on 2024-04-04 14:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fornecedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cnpj_cpf', models.CharField(max_length=50)),
                ('razao_social', models.CharField(max_length=250)),
                ('email', models.CharField(max_length=250)),
                ('tipo_conta', models.CharField(max_length=50)),
                ('banco', models.CharField(max_length=100)),
                ('conta', models.CharField(max_length=100)),
                ('agencia', models.CharField(max_length=100)),
                ('DV', models.CharField(max_length=100)),
                ('tipo_pagamento', models.CharField(max_length=100)),
                ('data_registro', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Contrato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ano_vigencia', models.IntegerField()),
                ('descricao_servico', models.TextField()),
                ('categoria', models.CharField(max_length=100)),
                ('valor_contratado', models.FloatField()),
                ('distribuicao_mes', models.IntegerField()),
                ('numero_otrs', models.CharField(max_length=100)),
                ('links_docs', models.TextField()),
                ('data_registro', models.DateTimeField(auto_now=True)),
                ('marca', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='base.marca')),
                ('natureza_orcamentaria', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='base.naturezaorcamentaria')),
                ('unidade', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='base.unidade')),
                ('fornecedor', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='registros.fornecedor')),
            ],
        ),
    ]
