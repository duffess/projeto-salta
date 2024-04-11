# Generated by Django 5.0.4 on 2024-04-11 01:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registros', '0004_remove_contrato_anual_ano_vigencia_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fornecedor',
            old_name='cnpj_cpf',
            new_name='documento',
        ),
        migrations.RenameField(
            model_name='fornecedor',
            old_name='DV',
            new_name='dv',
        ),
        migrations.RenameField(
            model_name='fornecedor',
            old_name='razao_social',
            new_name='razaoSocial',
        ),
        migrations.RenameField(
            model_name='fornecedor',
            old_name='tipo_conta',
            new_name='tipoConta',
        ),
        migrations.RenameField(
            model_name='fornecedor',
            old_name='tipo_pagamento',
            new_name='tipoPagamento',
        ),
    ]
