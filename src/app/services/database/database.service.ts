import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  tableName = 'Webscraper';
  rowName = 'Breweries';

  getData(): Observable<any> {
    AWS.config.region = environment.region;

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.identityPoolId
    });

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: this.tableName,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: {
        '#id': 'id'
      },
      ExpressionAttributeValues: {
        ':id': this.rowName
      }
    };

    const observable = new Observable((observer: any) => {
      dynamodb.query(params, (err, data) => {
        if (err) {
          observer.error();
        }
        else {
          data.Items[0] ? observer.next(data.Items[0]) : observer.error();
          observer.complete();
        }
      });
    });

    return observable;
  }
}
