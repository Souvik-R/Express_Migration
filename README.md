# Express_Migration
this is for learning migration in node js

# first command
npm install --save-dev sequelize-cli
*********It provide us node_modules, package-lock.json and package.json file.

# second command
npm install --save sequelize
npm install --save mysql2

# third command
npx sequelize-cli init
*********It gives us configs, migrations, models, seeders folder.

# fourth command
npx sequelize-cli model:generate --name Users --attributes name:string,email:string
*********It will create model, here my model name is Users and the attributes are name, email.
*********every time in case of creating a model we have to use this command.
*********For generating any model the command will remain save. just we need to changes the model name and attributes name.

# fifth command
npx sequelize-cli db:migrate
*********We need to do migrate for database tables.

npx sequelize-cli db:migrate:undo
*********We can undo if any changes come and we forget to attach.

npx sequelize-cli db:migrate:undo:all
*********We can revert all the tables by this command.

# sixth command
npx sequelize-cli db:migrate:undo --name 20230123121904-create-students.js
*********We can undo any perticular table by this command.

# seventh command
npx sequelize-cli db:migrate:status
*********We can check migraton status by this command.

# eight command
npx sequelize db:create
*********To create a database use this command.
npx sequelize db:drop
*********To drop a database use this command.

# ninth command
npx sequelize-cli seed:generate --name add-user
*********To generate seeder file. 
*********To add dummy user, so that we can login.

# tenth command
npx sequelize-cli db:seed:all
*********To insert data inside table through migration. 

# eleventh command
npx sequelize-cli db:seed --seed 20230124080626-add-user.js
*********We can insert data in table individually.

# twelve command
npx sequelize-cli db:seed:undo
*********In case of undo single or the last updated one.

# thirteen command
npx sequelize-cli db:seed:undo:all
*********In case of undo all data.

# all commands for express_sequelize_migration
Sequelize CLI [Node: 16.14.2, CLI: 6.5.2, ORM: 6.28.0]

sequelize <command>

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file
  sequelize migration:create                  Generates a new migration file
  sequelize model:generate                    Generates a model and its migration
  sequelize model:create                      Generates a model and its migration
  sequelize seed:generate                     Generates a new seed file
  sequelize seed:create                       Generates a new seed file
