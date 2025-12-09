from setuptools import setup, find_packages

setup(
    name='apiverve_sqlexplainer',
    version='1.1.12',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='SQL Explainer analyzes SQL queries and provides clear, plain English explanations of what they do. Perfect for learning SQL, code reviews, or documentation.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
