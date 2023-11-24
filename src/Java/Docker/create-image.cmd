docker build --no-cache -f SQL\Dockerfile.PostgreSql -t upravlyayushhaya_kompaniya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t upravlyayushhaya_kompaniya-java/app ../../..
