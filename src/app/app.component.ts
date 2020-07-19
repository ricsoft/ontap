import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    AWS.config.region = environment.region;

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.identityPoolId
    });

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: 'Webscraper',
      KeyConditionExpression: '#ID = :ID',
      ExpressionAttributeNames: {
        '#ID': 'ID'
      },
      ExpressionAttributeValues: {
        ':ID': 'Breweries'
      }
    };

    dynamodb.query(params, (err, data) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Success', data.Items);
      }
    });
  }
}
