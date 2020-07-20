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
      KeyConditionExpression: '#ID = :ID',
      ExpressionAttributeNames: {
        '#ID': 'ID'
      },
      ExpressionAttributeValues: {
        ':ID': this.rowName
      }
    };

    const observable = new Observable((observer: any) => {
      // dynamodb.query(params, (err, data) => {
      //   if (err) {
      //     observer.error();
      //   }
      //   else {
      //     data.Items[0] ? observer.next(data.Items[0]) : observer.error();
      //     observer.complete();
      //   }
      // });

      observer.next({
        Data: [
          [
            {
              name: 'Retriever Golden Ale',
              type: 'Golden Ale'
            },
            {
              name: 'Chase My Tail Pale Ale',
              type: 'West Coast Pale Ale'
            },
            {
              name: 'Squirrel Chaser Hazy Pale Ale',
              type: 'Hazy Pale Ale'
            },
            {
              name: 'High Five Hazy IPA',
              type: 'Hazy IPA '
            },
            {
              name: 'Play Dead IPA',
              type: 'West Coast IPA'
            },
            {
              name: 'Faded White IPA',
              type: 'IPA – White'
            },
            {
              name: 'Take A Walk Wit',
              type: 'Wheat Beer – Witbier'
            },
            {
              name: 'Go Get It Ginger Lime Gose',
              type: 'Sour – Fruited Gose'
            },
            {
              name: 'Lifelong Lite Lager',
              type: 'Lager – American'
            }
          ],
          [
            {
              name: 'Hardy Brown Ale'
            },
            {
              name: 'Vienna Amber Lager'
            },
            {
              name: 'Chipper Blonde Ale'
            },
            {
              name: 'Rocky Point Lager'
            },
            {
              name: 'Intersection | Milepost Red 2016'
            },
            {
              name: 'Affable IPA'
            },
            {
              name: 'Bomber Collab | Earlyhouse Session Ale'
            },
            {
              name: 'Northpaw/ABC/Moody collab - Love Movement'
            },
            {
              name: 'Intrepid Matcha Saison'
            },
            {
              name: 'Zacs Basic Batch - California Common'
            },
            {
              name: 'Cask engine | Export Pale Ale'
            },
            {
              name: 'Cask Engine | London Red'
            },
            {
              name: 'Russian Imperial Stout'
            },
            {
              name: 'Brickers | Original'
            },
            {
              name: 'Roche | Rose 2019'
            },
            {
              name: 'BBA Golden Stout '
            }
          ],
          [
            {
              name: 'Dawn Pilsner'
            },
            {
              name: 'Dusk Pale Ale'
            },
            {
              name: 'Humans – An IPA for the People'
            },
            {
              name: 'Dreamboat Hazy IPA'
            },
            {
              name: 'Graffiti West Coast IPA'
            },
            {
              name: 'Dim Wit Belgian Wheat Ale'
            },
            {
              name: 'Motel Hazy Pale Ale'
            }
          ],
          [
            {
              name: 'DAT JUICE 100% CITRA PALE ALE'
            },
            {
              name: 'GOOD CLEAN FUN WEST COAST IPA'
            },
            {
              name: 'WOULD CRUSH RASPBERRY WHEAT ALE'
            },
            {
              name: 'LOW LIFE LAGER'
            },
            {
              name: 'Lil\' Gulp RADLER'
            },
            {
              name: 'Volcano Prince Milkshake IPA with Pineapple & Coconut'
            },
            {
              name: 'turn & burn IPA'
            },
            {
              name: 'Jock Jams Lemon Bar Dessert Sour'
            },
            {
              name: 'BLENDSHIPBiére de Coupage'
            }
          ]
        ],
        Date: 'Jul 19, 2020',
        ID: 'Breweries'
      });

      observer.complete();
    });

    return observable;
  }
}
