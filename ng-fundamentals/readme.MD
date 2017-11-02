Angular 2 Fundamentals Course
========================
This is the getting started package the Pluralsight course on Angular 2 Fundamentals found here: http://app.pluralsight.com/courses/angular2-fundamentals

**Course Status**

The course is currently a work in progress

ISSUES:

1 - When running "npm start" I got the following errors:

> ng2-fundamentals-demo@1.0.0 start D:\Shared\Proyectos\PluralSight\Angular 2 Fundamentals\ng-fundamentals\ng-fundamentals
> tsc && concurrently "npm run tsc:w" "npm run server"

error TS18003: No inputs were found in config file 'D:/Shared/Proyectos/PluralSight/Angular 2 Fundamentals/ng-fundamentals/ng-fundamentals/tsconfig.json'. Speci             fied 'include' paths were '["**/*"]' and 'exclude' paths were '["node_modules/*","**/*-aot.ts"]'.
node_modules/@types/core-js/index.d.ts(47,36): error TS2304: Cannot find name 'Iterable'.
node_modules/@types/core-js/index.d.ts(353,48): error TS2304: Cannot find name 'PropertyKey'.
node_modules/@types/core-js/index.d.ts(354,52): error TS2304: Cannot find name 'PropertyKey'.
.............................................................................................
.............................................................................................
.............................................................................................

Here we have 2 different errors in the output.
The error "error TS18003" can be fixed adding an empty ts file inside the app folder. In my case I added an empty app.module.ts file.
The errors "error TS2304" can be fixed adding the line '"lib": [ "es2015", "dom" ],' to the tsconfig.json

2 - When running "npm run tsc" I got the following error:

node_modules/rxjs/Subject.d.ts(16,22): error TS2415: Class 'Subject<T>' incorrectly extends base class 'Observable<T>'.
  Types of property 'lift' are incompatible.
.............................................................................................
.............................................................................................
.............................................................................................

This issue can be fixed adding the line "skipLibCheck": true to the tsconfig.json

TO START THE APP IN THE CONSOLE:

cd "D:\Shared\Proyectos\PluralSight\Angular 2 Fundamentals\ng-fundamentals\ng-fundamentals"

"npm start"

The "login.component.html" is a template driven form, meaning we built the whole form and the validation in the html itself.

The "profile.component.html" is a reactive form (aka: model driven form), define the fields and validations in the component and then wire up them in the template.
