docker build --no-cache -f SQL\Dockerfile.PostgreSql -t upravlyayushhaya_kompaniya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t upravlyayushhaya_kompaniya/app ../..
