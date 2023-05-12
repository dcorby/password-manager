#ng build --deploy-url /password-manager/ --base-href /password-manager/
aws s3 cp --recursive /home/dmc7z/angular/pwmanager/pwmanager/dist/pwmanager s3://www.dcorby.com/password-manager/
