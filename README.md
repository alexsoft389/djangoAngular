## Requirements

You need the following to run this app:

* Python 3.5 or higher (Python 2.x is not supported by Django 2.x)
* [Pipenv](https://pipenv.readthedocs.io/)
* Node v8.x or higher
* NPM v5.x or higher

## Setup

Open a terminal at the repo root, and run the following:

```bash
pipenv install
pipenv shell
cd microblog/front-end
npm install
ng build
cd ../..
python manage.py runserver
```

Your app will be available at http://127.0.0.1:8000.
