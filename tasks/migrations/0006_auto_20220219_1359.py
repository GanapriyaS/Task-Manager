# Generated by Django 2.2.12 on 2022-02-19 13:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0005_task_priortity'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='priortity',
            new_name='priority',
        ),
    ]
