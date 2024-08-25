dotnet new sln -o DotnetApiPostgres

cd DotnetApiPostgres

dotnet new webapi --use-controllers -n "DotnetApiPostgres.Api"

dotnet sln add .\DotnetApiPostgres.Api\DotnetApiPostgres.Api.csproj

dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL

dotnet add package Microsoft.EntityFrameworkCore.Design


dotnet tool install --global dotnet-ef

or

dotnet tool update --global dotnet-ef

// migration
dotnet ef  migrations add "init"
dotnet ef  database update


// testing

Testing APIs
I am using the REST Client for testing, but you can also use Swagger or Postman. 
Install the VS Code extension for the REST Client.




