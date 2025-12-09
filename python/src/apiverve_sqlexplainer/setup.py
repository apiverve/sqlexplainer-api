from setuptools import setup, find_packages

import os
lib_folder = os.path.dirname(os.path.realpath(__file__))
requirements_file = os.path.join(lib_folder, 'requirements.txt')
install_requires = ["requests >= 2.25.1", "setuptools >= 56.0.0"]
if os.path.exists(requirements_file):
    with open(requirements_file, 'r') as f:
        install_requires = f.read().splitlines()

setup(
    name='apiverve_sqlexplainer',
    version='1.1.12',
    packages=find_packages(),
    include_package_data=True,
    install_requires=install_requires,
    description='SQL Explainer analyzes SQL queries and provides clear, plain English explanations of what they do. Perfect for learning SQL, code reviews, or documentation.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com',
    project_urls={
        'Homepage': 'https://apiverve.com',
        'Documentation': 'https://docs.apiverve.com/ref/sqlexplainer',
        'Source': 'https://github.com/apiverve/sqlexplainer-api',
        'Bug Tracker': 'https://github.com/apiverve/sqlexplainer-api/issues'
    },
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)