FROM python:3.9-slim-bullseye

ENV PYTHONUNBUFFERED True

ENV APP_HOME /AlgoTrading_App
WORKDIR ${APP_HOME}
COPY . ./

RUN pip install -r requirements.txt
RUN pip install gunicorn

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 AlgoTrading_App:app